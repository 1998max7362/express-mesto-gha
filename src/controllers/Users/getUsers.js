import user from "../../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.send(users);
  } catch (err) {
    next(err);
  }
};
