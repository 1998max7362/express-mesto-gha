import user from "../../models/user.js";
import { errorHandler } from "../../middlewares/Errors/errorHandler.js";

export const getUserById = async (req, res) => {
  const _id = req.params.userId;
  try {
    const users = await user.find({ _id });
    res.send(users);
  } catch (err) {
    next(err);
  }
};
