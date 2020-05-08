import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  console.log(firebaseAdmin.apps.length);
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default firebaseAdmin;
