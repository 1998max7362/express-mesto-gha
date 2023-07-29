import user from "../../models/user.js";

export const postUser = async (req, res) => {
  const { name, about, avatar } = req.body;
  try {
    const newUser = await user.create({ name, about, avatar });
    res.send({ user: newUser, error: false });
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
