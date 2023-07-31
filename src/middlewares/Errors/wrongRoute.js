const ERROR_CODE = 404;

const wrongRouteError = (req, res) => {
  res.status(ERROR_CODE).send({ message: "Страница не найдена" });
};

export default wrongRouteError;
