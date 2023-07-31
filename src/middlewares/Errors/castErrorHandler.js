const ERROR_CODE = 400;

const moderlToErrorMap = {
  user: "Передан некорректный id пользователя",
  card: "Передан некорректный id карточки",
};

const modelToErrorMapper = (modelName) => moderlToErrorMap[modelName];

const castErrorHandler = (err, req, res) => {
  const { modelName } = err.model;
  res.status(ERROR_CODE).send({ message: modelToErrorMapper(modelName) });
};

export default castErrorHandler;
