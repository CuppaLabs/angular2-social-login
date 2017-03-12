module.exports = {
  // App Settings
  //MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/cuppaOAuth',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://username:password@ds111489.mlab.com:11489/cuppaoauth',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'xxxxxxx',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'xxxxxxx',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'xxxxxx',
};
