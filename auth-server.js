/**
 * Cuppa OAuth Node Server
 * (c) 2016 Cuppa Labs
 * License: MIT
 */

var path = require('path');
var qs = require('querystring');

var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
var mongoose = require('mongoose');
var request = require('request');

var config = require('./auth-config');

var userSchema = new mongoose.Schema({
  email: { type: String, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  provider: String,
  provider_id: String
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model('User', userSchema);

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function(err) {
  console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

var app = express();

app.set('port', process.env.PORT || 5000);
//app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Force HTTPS on Heroku
if (app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}
app.use(express.static(path.join(__dirname, '/dist')));

/*
 |--------------------------------------------------------------------------
 | Login Required Middleware
 |--------------------------------------------------------------------------
 */
function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}

/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
app.get('/api/profile', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send(user);
  });
});

/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */
app.put('/api/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  });
});


/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
app.post('/auth/login', function(req, res) {
  User.findOne({ email: req.body.email }, '+password', function(err, user) {
    if (!user) {
      return res.status(401).send({ message: 'Invalid email and/or password' });
    }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email and/or password' });
      }
      res.send({ token: createJWT(user) });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */
app.post('/auth/signup', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken' });
    }
    var user = new User({
      displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password
    });
    user.save(function(err, result) {
      if (err) {
        res.status(500).send({ message: err.message });
      }
      res.send({ token: createJWT(result) });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Google
 |--------------------------------------------------------------------------
 */
app.post('/auth/google', function(req, res) {
  var accessTokenUrl = 'https://www.googleapis.com/oauth2/v4/token';
  var peopleApiUrl = 'https://www.googleapis.com/oauth2/v2/userinfo?fields=email%2Cfamily_name%2Cgender%2Cgiven_name%2Chd%2Cid%2Clink%2Clocale%2Cname%2Cpicture%2Cverified_email';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GOOGLE_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };
   var token_request='code='+req.body.code+
        '&client_id='+req.body.clientId+
        '&client_secret='+config.GOOGLE_SECRET+
        '&redirect_uri='+req.body.redirectUri+
        '&grant_type=authorization_code';
    var request_length = token_request.length;
  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { body: token_request, headers: {'Content-type':'application/x-www-form-urlencoded'} }, function(err, response, token) {
    var accessToken = JSON.parse(token).access_token;
    var headers = { Authorization: 'Bearer ' + accessToken };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
      if (profile.error) {
        return res.status(500).send({message: profile.error.message});
      }

      User.findOne({ email: profile.email }, function(err, existingUser) {
          if (existingUser && existingUser.provider == "google") {
            var token = createJWT(existingUser);
            res.send({ token: token }); 
          }
          else if (existingUser && existingUser.provider != "google") {
            var user = {};
              user.provider_id = profile.id;
              user.provider = "google";
              user.email = profile.email;
              user.picture = profile.picture.replace('sz=50', 'sz=200');
              user.displayName = profile.name;
              User.findOneAndUpdate({email:existingUser.email},user, function(err) {
                var token = createJWT(existingUser);
                res.send({ token: token });
              });
          }
          else{
              var user = new User();
              user.provider_id = profile.id;
              user.provider = "google";
              user.email = profile.email;
              user.picture = profile.picture.replace('sz=50', 'sz=200');
              user.displayName = profile.name;
              user.save(function(err) {
                var token = createJWT(user);
                res.send({ token: token });
              });
          }
         // var token = req.header('Authorization').split(' ')[1];
         // var payload = jwt.decode(token, config.TOKEN_SECRET);
        });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with GitHub
 |--------------------------------------------------------------------------
 */
app.post('/auth/github', function(req, res) {
  var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  var userApiUrl = 'https://api.github.com/user';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GITHUB_SECRET,
    redirect_uri: req.body.redirectUri
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params }, function(err, response, accessToken) {
    accessToken = qs.parse(accessToken);
    var headers = { 'User-Agent': 'CuppaLabs' };
    //console.log(accessToken);
   // res.send({ token: accessToken });
    // Step 2. Retrieve profile information about the current user.
    request.get({ url: userApiUrl, qs: accessToken, headers: headers, json: true }, function(err, response, profile) {

      // Step 3a. Link user accounts.
      if (req.header('Authorization')) {
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if(err){
            return res.status(500).send({message: "error occured"});
          }
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a GitHub account that belongs to you' });
          }
          var token = req.header('Authorization').split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          User.findById(payload.sub, function(err, user) {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.github = profile.id;
            user.picture = user.picture || profile.avatar_url;
            user.displayName = user.displayName || profile.name;
            user.save(function() {
              var token = createJWT(user);
              res.send({ token: token });
            });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if (existingUser) {
            var token = createJWT(existingUser);
            return res.send({ token: token });
          }
          var user = new User();
          user.github = profile.id;
          user.picture = profile.avatar_url;
          user.displayName = profile.name;
          user.email = profile.email;

          user.save(function(err,user) {
            var token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    }); 
  });
});



/*
 |--------------------------------------------------------------------------
 | Login with LinkedIn
 |--------------------------------------------------------------------------
 */
app.post('/auth/linkedin', function(req, res) {
  var accessTokenUrl = 'https://www.linkedin.com/uas/oauth2/accessToken';
  var peopleApiUrl = 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address,picture-url)';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.LINKEDIN_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { form: params, json: true }, function(err, response, body) {
    if (response.statusCode !== 200) {
      return res.status(response.statusCode).send({ message: body.error_description });
    }
    var params = {
      oauth2_access_token: body.access_token,
      format: 'json'
    };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, qs: params, json: true }, function(err, response, profile) {

        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ email: profile.emailAddress }, function(err, existingUser) {
        if (existingUser && existingUser.provider == "linkedin") {
            var token = createJWT(existingUser);
            res.send({ token: token }); 
          }
          else if (existingUser && existingUser.provider != "linkedin") {
            var user = {};
              user.provider_id = profile.id;
              user.provider = "linkedin";
              user.email = profile.emailAddress;
              user.picture = profile.pictureUrl;
              user.displayName = profile.firstName+' '+profile.lastName;
              User.findOneAndUpdate({email:existingUser.email},user, function(err) {
                var token = createJWT(existingUser);
                res.send({ token: token });
              });
          }
          else{
              var user = new User();
              user.provider_id = profile.id;
              user.provider = "linkedin";
              user.email = profile.emailAddress;
              user.picture = profile.pictureUrl;
              user.displayName = profile.firstName+' '+profile.lastName;
              user.save(function() {
                var token = createJWT(user);
                res.send({ token: token });
              });
        }
        });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Facebook
 |--------------------------------------------------------------------------
 */
app.post('/auth/facebook', function(req, res) {
  var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name','picture.type(large)'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.FACEBOOK_SECRET,
    redirect_uri: req.body.redirectUri
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
    if (response.statusCode !== 200) {
      return res.status(500).send({ message: accessToken.error.message });
    }

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: profile.error.message });
      }
      User.findOne({ email: profile.email }, function(err, existingUser) {
          if (existingUser && existingUser.provider == "facebook") {
            var token = createJWT(existingUser);
            res.send({ token: token }); 
          }
          else if (existingUser && existingUser.provider != "facebook") {
            var user = {};
              user.provider_id = profile.id;
              user.provider = "facebook";
              user.email = profile.email;
              user.picture = profile.picture.data.url;
              user.displayName = profile.name;
              User.findOneAndUpdate({email:existingUser.email},user, function(err) {
                var token = createJWT(existingUser);
                res.send({ token: token });
              });
          }
          else{
              var user = new User();
              user.provider_id = profile.id;
              user.provider = "facebook";
              user.email = profile.email;
              user.picture = profile.picture.data.url;
              user.displayName = profile.name;
              user.save(function(err) {
                var token = createJWT(user);
                res.send({ token: token });
              });
          }
         // var token = req.header('Authorization').split(' ')[1];
         // var payload = jwt.decode(token, config.TOKEN_SECRET);
        });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Yahoo
 |--------------------------------------------------------------------------
 */
app.post('/auth/yahoo', function(req, res) {
  var accessTokenUrl = 'https://api.login.yahoo.com/oauth2/get_token';
  var clientId = req.body.clientId;
  var clientSecret = config.YAHOO_SECRET;
  var formData = {
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };
  var headers = { Authorization: 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64') };

  // Step 1. Exchange authorization code for access token.
  request.post({ url: accessTokenUrl, form: formData, headers: headers, json: true }, function(err, response, body) {
    var socialApiUrl = 'https://social.yahooapis.com/v1/user/' + body.xoauth_yahoo_guid + '/profile?format=json';
    var headers = { Authorization: 'Bearer ' + body.access_token };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: socialApiUrl, headers: headers, json: true }, function(err, response, body) {

      // Step 3a. Link user accounts.
      if (req.header('Authorization')) {
        User.findOne({ yahoo: body.profile.guid }, function(err, existingUser) {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Yahoo account that belongs to you' });
          }
          var token = req.header('Authorization').split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          User.findById(payload.sub, function(err, user) {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.yahoo = body.profile.guid;
            user.displayName = user.displayName || body.profile.nickname;
            user.save(function() {
              var token = createJWT(user);
              res.send({ token: token });
            });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ yahoo: body.profile.guid }, function(err, existingUser) {
          if (existingUser) {
            return res.send({ token: createJWT(existingUser) });
          }
          var user = new User();
          user.yahoo = body.profile.guid;
          user.displayName = body.profile.nickname;
          user.save(function() {
            var token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Twitter
 | Note: Make sure "Request email addresses from users" is enabled
 | under Permissions tab in your Twitter app. (https://apps.twitter.com)
 |--------------------------------------------------------------------------
 */
app.post('/auth/twitter', function(req, res) {
  var requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
  var accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
  var profileUrl = 'https://api.twitter.com/1.1/account/verify_credentials.json';

  // Part 1 of 2: Initial request from Satellizer.
  if (!req.body.oauth_token || !req.body.oauth_verifier) {
    var requestTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      callback: req.body.redirectUri
    };

    // Step 1. Obtain request token for the authorization popup.
    request.post({ url: requestTokenUrl, oauth: requestTokenOauth }, function(err, response, body) {
      var oauthToken = qs.parse(body);

      // Step 2. Send OAuth token back to open the authorization screen.
      res.send(oauthToken);
    });
  } else {
    // Part 2 of 2: Second request after Authorize app is clicked.
    var accessTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      token: req.body.oauth_token,
      verifier: req.body.oauth_verifier
    };

    // Step 3. Exchange oauth token and oauth verifier for access token.
    request.post({ url: accessTokenUrl, oauth: accessTokenOauth }, function(err, response, accessToken) {

      accessToken = qs.parse(accessToken);

      var profileOauth = {
        consumer_key: config.TWITTER_KEY,
        consumer_secret: config.TWITTER_SECRET,
        token: accessToken.oauth_token,
        token_secret: accessToken.oauth_token_secret,
      };

      // Step 4. Retrieve user's profile information and email address.
      request.get({
        url: profileUrl,
        qs: { include_email: true },
        oauth: profileOauth,
        json: true
      }, function(err, response, profile) {

        // Step 5a. Link user accounts.
        if (req.header('Authorization')) {
          User.findOne({ twitter: profile.id }, function(err, existingUser) {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Twitter account that belongs to you' });
            }

            var token = req.header('Authorization').split(' ')[1];
            var payload = jwt.decode(token, config.TOKEN_SECRET);

            User.findById(payload.sub, function(err, user) {
              if (!user) {
                return res.status(400).send({ message: 'User not found' });
              }

              user.twitter = profile.id;
              user.email = profile.email;
              user.displayName = user.displayName || profile.name;
              user.picture = user.picture || profile.profile_image_url_https.replace('_normal', '');
              user.save(function(err) {
                res.send({ token: createJWT(user) });
              });
            });
          });
        } else {
          // Step 5b. Create a new user account or return an existing one.
          User.findOne({ twitter: profile.id }, function(err, existingUser) {
            if (existingUser) {
              return res.send({ token: createJWT(existingUser) });
            }

            var user = new User();
            user.twitter = profile.id;
            user.email = profile.email;
            user.displayName = profile.name;
            user.picture = profile.profile_image_url_https.replace('_normal', '');
            user.save(function() {
              res.send({ token: createJWT(user) });
            });
          });
        }
      });
    });
  }
});

/*
 |--------------------------------------------------------------------------
 | Login with Foursquare
 |--------------------------------------------------------------------------
 */
app.post('/auth/foursquare', function(req, res) {
  var accessTokenUrl = 'https://foursquare.com/oauth2/access_token';
  var profileUrl = 'https://api.foursquare.com/v2/users/self';
  var formData = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.FOURSQUARE_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post({ url: accessTokenUrl, form: formData, json: true }, function(err, response, body) {
    var params = {
      v: '20140806',
      oauth_token: body.access_token
    };

    // Step 2. Retrieve information about the current user.
    request.get({ url: profileUrl, qs: params, json: true }, function(err, response, profile) {
      profile = profile.response.user;

      // Step 3a. Link user accounts.
      if (req.header('Authorization')) {
        User.findOne({ foursquare: profile.id }, function(err, existingUser) {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Foursquare account that belongs to you' });
          }
          var token = req.header('Authorization').split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          User.findById(payload.sub, function(err, user) {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.foursquare = profile.id;
            user.picture = user.picture || profile.photo.prefix + '300x300' + profile.photo.suffix;
            user.displayName = user.displayName || profile.firstName + ' ' + profile.lastName;
            user.save(function() {
              var token = createJWT(user);
              res.send({ token: token });
            });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ foursquare: profile.id }, function(err, existingUser) {
          if (existingUser) {
            var token = createJWT(existingUser);
            return res.send({ token: token });
          }
          var user = new User();
          user.foursquare = profile.id;
          user.picture = profile.photo.prefix + '300x300' + profile.photo.suffix;
          user.displayName = profile.firstName + ' ' + profile.lastName;
          user.save(function() {
            var token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Twitch
 |--------------------------------------------------------------------------
 */
app.post('/auth/twitch', function(req, res) {
  var accessTokenUrl = 'https://api.twitch.tv/kraken/oauth2/token';
  var profileUrl = 'https://api.twitch.tv/kraken/user';
  var formData = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.TWITCH_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post({ url: accessTokenUrl, form: formData, json: true }, function(err, response, accessToken) {
   var params = {
     oauth_token: accessToken.access_token
   };

    // Step 2. Retrieve information about the current user.
    request.get({ url: profileUrl, qs: params, json: true }, function(err, response, profile) {
      // Step 3a. Link user accounts.
      if (req.header('Authorization')) {
        User.findOne({ twitch: profile._id }, function(err, existingUser) {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Twitch account that belongs to you' });
          }
          var token = req.header('Authorization').split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          User.findById(payload.sub, function(err, user) {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.twitch = profile._id;
            user.picture = user.picture || profile.logo;
            user.displayName = user.name || profile.name;
            user.email = user.email || profile.email;
            user.save(function() {
              var token = createJWT(user);
              res.send({ token: token });
            });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ twitch: profile._id }, function(err, existingUser) {
          if (existingUser) {
            var token = createJWT(existingUser);
            return res.send({ token: token });
          }
          var user = new User();
          user.twitch = profile._id;
          user.picture = profile.logo;
          user.displayName = profile.name;
          user.email = profile.email;
          user.save(function() {
            var token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Bitbucket
 |--------------------------------------------------------------------------
 */
app.post('/auth/bitbucket', function(req, res) {
  var accessTokenUrl = 'https://bitbucket.org/site/oauth2/access_token';
  var userApiUrl = 'https://bitbucket.org/api/2.0/user';
  var emailApiUrl = 'https://bitbucket.org/api/2.0/user/emails';

  var headers = {
    Authorization: 'Basic ' + new Buffer(req.body.clientId + ':' + config.BITBUCKET_SECRET).toString('base64')
  };

  var formData = {
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post({ url: accessTokenUrl, form: formData, headers: headers, json: true }, function(err, response, body) {
    if (body.error) {
      return res.status(400).send({ message: body.error_description });
    }

    var params = {
      access_token: body.access_token
    };

    // Step 2. Retrieve information about the current user.
    request.get({ url: userApiUrl, qs: params, json: true }, function(err, response, profile) {

      // Step 2.5. Retrieve current user's email.
      request.get({ url: emailApiUrl, qs: params, json: true }, function(err, response, emails) {
        var email = emails.values[0].email;

        // Step 3a. Link user accounts.
        if (req.header('Authorization')) {
          User.findOne({ bitbucket: profile.uuid }, function(err, existingUser) {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Bitbucket account that belongs to you' });
            }
            var token = req.header('Authorization').split(' ')[1];
            var payload = jwt.decode(token, config.TOKEN_SECRET);
            User.findById(payload.sub, function(err, user) {
              if (!user) {
                return res.status(400).send({ message: 'User not found' });
              }
              user.bitbucket = profile.uuid;
              user.email = user.email || email;
              user.picture = user.picture || profile.links.avatar.href;
              user.displayName = user.displayName || profile.display_name;
              user.save(function() {
                var token = createJWT(user);
                res.send({ token: token });
              });
            });
          });
        } else {
          // Step 3b. Create a new user account or return an existing one.
          User.findOne({ bitbucket: profile.id }, function(err, existingUser) {
            if (existingUser) {
              var token = createJWT(existingUser);
              return res.send({ token: token });
            }
            var user = new User();
            user.bitbucket = profile.uuid;
            user.email = email;
            user.picture = profile.links.avatar.href;
            user.displayName = profile.display_name;
            user.save(function() {
              var token = createJWT(user);
              res.send({ token: token });
            });
          });
        }
      });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | Login with Spotify
 |--------------------------------------------------------------------------
 */

 app.post('/auth/spotify', function(req, res) {
   var tokenUrl = 'https://accounts.spotify.com/api/token';
   var userUrl = 'https://api.spotify.com/v1/me';

   var params = {
     grant_type: 'authorization_code',
     code: req.body.code,
     redirect_uri: req.body.redirectUri
   };

   var headers = {
     Authorization: 'Basic ' + new Buffer(req.body.clientId + ':' + config.SPOTIFY_SECRET).toString('base64')
   };

   request.post(tokenUrl, { json: true, form: params, headers: headers }, function(err, response, body) {
     if (body.error) {
       return res.status(400).send({ message: body.error_description });
     }

     request.get(userUrl, {json: true, headers: {Authorization: 'Bearer ' + body.access_token} }, function(err, response, profile){
       // Step 3a. Link user accounts.
       if (req.header('Authorization')) {
         User.findOne({ spotify: profile.id }, function(err, existingUser) {
           if (existingUser) {
             return res.status(409).send({ message: 'There is already a Spotify account that belongs to you' });
           }
           var token = req.header('Authorization').split(' ')[1];
           var payload = jwt.decode(token, config.TOKEN_SECRET);
           User.findById(payload.sub, function(err, user) {
             if (!user) {
               return res.status(400).send({ message: 'User not found' });
             }
             user.spotify = profile.id;
             user.email = user.email || profile.email;
             user.picture = profile.images.length > 0 ? profile.images[0].url : '';
             user.displayName = user.displayName || profile.displayName || profile.id;

             user.save(function() {
               var token = createJWT(user);
               res.send({ token: token });
             });
           });
         });
       } else {
         // Step 3b. Create a new user account or return an existing one.
         User.findOne({ spotify: profile.id }, function(err, existingUser) {
           if (existingUser) {
             return res.send({ token: createJWT(existingUser) });
           }
           var user = new User();
           user.spotify = profile.id;
           user.email = profile.email;
           user.picture = profile.images.length > 0 ? profile.images[0].url : '';
           user.displayName = profile.displayName || profile.id;

           user.save(function(err) {
             var token = createJWT(user);
             res.send({ token: token });
           });
         });
       }
     });
   });
 });

/*
 |--------------------------------------------------------------------------
 | Unlink Provider
 |--------------------------------------------------------------------------
 */
app.post('/auth/unlink', ensureAuthenticated, function(req, res) {
  var provider = req.body.provider;
  var providers = ['facebook', 'foursquare', 'google', 'github', 'instagram',
    'linkedin', 'live', 'twitter', 'twitch', 'yahoo', 'bitbucket', 'spotify'];

  if (providers.indexOf(provider) === -1) {
    return res.status(400).send({ message: 'Unknown OAuth Provider' });
  }

  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    user[provider] = undefined;
    user.save(function() {
      res.status(200).end();
    });
  });
});
app.get('/mockData',function(req,res){
  res.sendFile(path.join(__dirname, 'dist/mockData/hookload.txt'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */

app.listen(app.get('port'), app.get('host'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});