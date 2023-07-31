const moderlToErrorMap = {
  user: "Передан некорректный id пользователя",
  card: "Передан некорректный id карточки",
};

const modelToErrorMapper = (modelName) => moderlToErrorMap[modelName];

const castErrorHandler = (err, req, res) => {
  const { modelName } = err.model;
  res.status(400).send({ message: modelToErrorMapper(modelName) });
};

export default castErrorHandler;
