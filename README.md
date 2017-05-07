# Cuppa Angular2 OAuth
[![npm version](https://img.shields.io/npm/v/cuppa-angular2-oauth.svg)](https://www.npmjs.com/package/cuppa-angular2-oauth)

### Social Login Script for Facebook, Google, LinkedIn
It is often required that, a user register's or sign up to login to a particular website or application. It is a tedious job to fill those long forms with user basic details. To avoid filling long forms, Cuppa Angular 2 OAuth provides a module to login using social OAuth services like google OAtuh, Facebook OAuth and LinkedIn OAuth. Using this your application will be able to recieve basic details of the user from social networking sites and you can store in your application environment.

# [Documentation](https://cuppalabs.github.io/ng2-social-login/documentation) | [Demo](https://cuppa-angular2-oauth.herokuapp.com/login).

![www.cuppalabs.com](https://raw.githubusercontent.com/CuppaLabs/angular2-social-login/master/docs/images/oauth-banner.png)


# [Documentation](https://cuppalabs.github.io/ng2-social-login/documentation) | [Demo](https://cuppa-angular2-oauth.herokuapp.com/login).

## Locally Build and Run
- Clone git repository.
- Configure `auth-config.js` with your mongoDB environment details and app secrets.
- replace `authServerBaseUrl` in login component with your environment details.
- Run `npm start`
- Go to `http://localhost:5000`

`NOTE: When running in local environment, make sure the redirect URL should match with the redirect URL you specified at the time of creating app with respective providers viz., Facebook, Google, LinkedIn. you can add http://localhost:5000/admin as redirectURL.`

Ahh !!! Now you are ready to make your app up and running.

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

## Credits
Thanks to Font Awesome the library.

## Author
Pradeep Kumar Terli

