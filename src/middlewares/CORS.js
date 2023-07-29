export const corsAllow = (req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "https://praktikum.tk");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

  next();
};
