import validatorErrorHandler from "./validatorErrorHandler.js";
import castErrorHandler from "./castErrorHandler.js";
import { notFoundIdHandler } from "./notFoundId.js";

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
  res.status(500).json({ message: "Произошла ошибккаа на сервере" });
};

export default errorHandler;
