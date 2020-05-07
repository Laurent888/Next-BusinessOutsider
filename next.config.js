require("dotenv").config();

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGESENDERID: process.env.FIREBASE_MESSAGESENDERID,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
  },
};
