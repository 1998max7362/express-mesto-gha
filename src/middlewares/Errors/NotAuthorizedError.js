const ERROR_CODE = 401;

export class NotAuthorizedError extends Error {
  constructor() {
    super("");
    this.name = "NotAuthorized";
  }
}

export const notAuthorizedErrorHandler = (err, req, res) => {
  res.status(ERROR_CODE).send({ message: "Необходима авторизация" });
};
