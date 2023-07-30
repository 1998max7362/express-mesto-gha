import user from "../../models/user.js";

export const postUser = async (req, res, next) => {
  const { name, about, avatar } = req.body;
  try {
    const newUser = await user.create({ name, about, avatar });
    res.send({ user: newUser, error: false });
  } catch (err) {
    next(err);
  }
};
