// eslint-disable-next-line consistent-return
const allowedCors = [
  "https://praktikum.tk",
  "http://praktikum.tk",
  "http://localhost:3000",
  "https://localhost:3000",
];

const corsAllow = (req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", true);
  next();
};

export default corsAllow;
