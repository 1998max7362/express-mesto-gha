import { validatorErrorHandler } from "./validatorErrorHandler.js";
import { castErrorHandler } from "./castErrorHandler.js";

export const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError"){
    validatorErrorHandler(err, req, res)
    return
  }
  if (err.name === "CastError"){
    castErrorHandler(err, req, res)
    return
  }
  res.status(500).json({message: err.stack})
};