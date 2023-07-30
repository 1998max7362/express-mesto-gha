export const validatorErrorHandler = (err, req, res) => {
  const pathsErrors = Object.keys(err.errors)
  res
    .status(400)
    .send({ error: true, errorMessage: `Переданы некорректные данные в полях ${pathsErrors.join(', ')}` });
};
