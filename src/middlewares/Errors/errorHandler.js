import validatorErrorHandler from "./validatorErrorHandler.js";
import castErrorHandler from "./castErrorHandler.js";
import { notFoundIdHandler } from "./notFoundId.js";
import { incorrectUserEmailOrPasswordErrorHandler } from "./incorrectUserEmailOrPasswordError.js";
import { notAuthorizedErrorHandler } from "./NotAuthorizedError.js";
import { notEnoughRightsErrorHandler } from "./notEnoughRightsError.js";

// Тут нужен next, чтобы первым параметров была ошибка
// Если убрать next,, то в переменную err кладется req, в req кладется res, в res кладется next
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    validatorErrorHandler(err, req, res);
    return;
  }
  if (err.name === "CastError") {
    castErrorHandler(err, req, res);
    return;
  }
  if (err.name === "notFoundId") {
    notFoundIdHandler(err, req, res);
    return;
  }
  if (err.name === "incorrectUserEmailOrPassword") {
    incorrectUserEmailOrPasswordErrorHandler(err, req, res);
    return;
  }
  if (err.name === "NotAuthorized") {
    notAuthorizedErrorHandler(err, req, res);
    return;
  }
  if (err.name === "notEnoughRights") {
    notEnoughRightsErrorHandler(err, req, res);
    return;
  }
  if (err.code === 11000) {
    res.status(409).json({ message: "Пользователь с данным e-mail уже существует" });
    return;
  }
  console.log(err);
  res.status(500).json({ message: "Произошла ошибккаа на сервере" });
};

export default errorHandler;
