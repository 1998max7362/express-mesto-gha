const ERROR_CODE = 404;

export class NotFoundIdError extends Error {
  constructor(path) {
    super("");
    this.name = "notFoundId";
    this.path = path;
  }
}

const pathToErrorMap = {
  user: "Запрашиваемый пользователь не найден",
  card: "Запрашиваемая карточка не найдена",
};

const pathToErrorMapper = (modelName) => pathToErrorMap[modelName];

export const notFoundIdHandler = (err, req, res) => {
  const { path } = err;
  res.status(ERROR_CODE).send({ message: pathToErrorMapper(path) });
};
