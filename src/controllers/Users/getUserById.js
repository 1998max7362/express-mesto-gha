import user from "../../models/user.js";

export const getUserById = async (req, res) => {
  const _id = req.params.userId;
  try {
    const users = await user.find({ _id });
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
