export const wrongRouteError = (req, res, next) => {
  res.status(404).send({ message: "Страница не найдена" });
};
