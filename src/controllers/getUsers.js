import user from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
