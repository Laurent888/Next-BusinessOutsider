import Cookie from "js-cookie";

interface IUser {
  id: string;
  email: string;
  name: string;
}

export const loginSetUserLocalStorageAndCookie = (
  token: string,
  user: IUser
) => {
  if (process.browser) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    Cookie.set("auth", { token, user });
  }
};
