import jwt from "jsonwebtoken";
import NotAuthorizedError from "./Errors/customErrors/NotAuthorizedError.js";

const { SECRET_KEY = "some-secret-key" } = process.env;

const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new NotAuthorizedError();
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
};

export default auth;
