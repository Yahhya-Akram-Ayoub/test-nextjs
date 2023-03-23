import { setCookie } from "nookies";

const setCookieClientSide = (res, name, value) => {
  setCookie(null, name, value, {
    maxAge: 60 * 60 * 24 * 360, //360 days
    path: "/",
  });
};

export default setCookieClientSide;
