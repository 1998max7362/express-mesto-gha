import validatorErrorHandler from "./validatorErrorHandler.js";
import castErrorHandler from "./castErrorHandler.js";
import { notFoundIdHandler } from "./notFoundId.js";

const errorHandler = (err, req, res) => {
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
  res.status(500).json({ message: err.stack });
};

export default errorHandler;
