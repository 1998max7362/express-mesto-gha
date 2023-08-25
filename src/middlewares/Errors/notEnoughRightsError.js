const ERROR_CODE = 403;

export class NotEnoughRightsError extends Error {
  constructor() {
    super("");
    this.name = "notEnoughRights";
  }
}

export const notEnoughRightsErrorHandler = (err, req, res) => {
  res.status(ERROR_CODE).send({ message: "Недостаточно прав для данного действия" });
};
