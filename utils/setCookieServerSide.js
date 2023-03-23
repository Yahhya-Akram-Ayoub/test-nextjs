import { serialize } from "cookie";

const setCookieServerSide = (res, name, value) => {
  const cookie = serialize(name, value, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 360, // 7 days
    path: "/",
  });
  res.setHeader("Set-Cookie", cookie);
};

export default setCookieServerSide;
