import setCookieClientSide from "@/utils/setCookieClientSide";

export default function login(req, res) {
  setCookieClientSide(res, "name", "Ayoub");
  res.status(200).json({ name: "John Doe" });
}
