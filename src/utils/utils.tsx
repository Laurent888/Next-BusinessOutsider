import Cookie from "js-cookie";

export const loginSetUserLocalStorageAndCookie = (token: string) => {
  if (process.browser) {
    localStorage.setItem("token", token);

    Cookie.set("auth", token);
  }
};

export const removeToken = (next: any) => {
  if (process.browser) {
    Cookie.remove("auth");
    localStorage.removeItem("token");

    next;
  }
};
