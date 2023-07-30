export const auth = (req, res, next) => {
  req.user = {
    _id: "64c5a76b391b53c26311597f", // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
}
