import * as firebaseAdmin from "firebase-admin";

// prettier-ignore
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      "project_id": process.env.PROJECT_ID,
      "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      "client_email": process.env.CLIENT_EMAIL,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default firebaseAdmin;
