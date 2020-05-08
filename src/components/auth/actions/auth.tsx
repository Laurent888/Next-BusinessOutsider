import firebaseAdmin from "../../../services/firebase/admin";

interface IUser {
  id: string;
  email: string;
  name: string;
}

export const getMe = async (req: any) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      const res = await firebaseAdmin.auth().verifyIdToken(token);
      return {
        id: res.uid,
        name: res.name,
        email: res.email,
      };
    } else {
      return null;
    }
  } catch (error) {
    if (error.errorInfo.code === "auth/id-token-expired") {
      console.log(error.errorInfo.message);
      return null;
    }
    console.log(error);
  }
};
