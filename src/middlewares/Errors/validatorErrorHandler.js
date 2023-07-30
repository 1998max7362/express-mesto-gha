export const validatorErrorHandler = (err, req, res) => {
  const pathsErrors = Object.keys(err.errors)
  res
    .status(400)
    .send({ message: `Переданы некорректные данные в полях ${pathsErrors.join(', ')}` });
};
