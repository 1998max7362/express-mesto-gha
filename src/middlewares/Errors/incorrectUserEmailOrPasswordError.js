const ERROR_CODE = 401;

export class IncorrectUserEmailOrPasswordError extends Error {
  constructor() {
    super("");
    this.name = "incorrectUserEmailOrPassword";
  }
}

export const incorrectUserEmailOrPasswordErrorHandler = (err, req, res) => {
  res.status(ERROR_CODE).send({ message: "Неправильные почта или пароль" });
};
