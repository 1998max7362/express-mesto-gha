import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "./Errors/NotAuthorizedError.js";

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new NotAuthorizedError();
  }
  const token = authorization.replace("Bearer ", "");

  let payload;

  try {
    payload = jwt.verify(token, "some-secret-key");
  } catch (err) {
    throw new NotAuthorizedError();
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};

export default auth;