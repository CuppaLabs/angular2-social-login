module.exports = {
  // App Settings
  //MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/cuppaOAuth',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://solomon301:pradeep@ds111489.mlab.com:11489/cuppaoauth',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '8ad41eb229d4478134cb05c1c7ac56bd',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'cJgVCcd4VsZS7FAVBV865EWq',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'vHn7uMvGgF2C2FPX',
};
