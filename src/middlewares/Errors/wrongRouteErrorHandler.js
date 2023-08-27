const ERROR_CODE = 404;

const wrongRouteErrorHandler = (req, res) => {
  res.status(ERROR_CODE).send({ message: "Страница не найдена" });
};

export default wrongRouteErrorHandler;
