const ERROR_CODE = 400;

const validatorErrorHandler = (err, req, res) => {
  const pathsErrors = Object.keys(err.errors);
  res
    .status(ERROR_CODE)
    .send({
      message: `Переданы некорректные данные в полях ${pathsErrors.join(", ")}`,
    });
};

export default validatorErrorHandler;
