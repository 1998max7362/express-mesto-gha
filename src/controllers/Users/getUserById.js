import user from "../../models/user.js";
import { notFoundIdError } from "../../middlewares/Errors/notFoundId.js";

export const getUserById = async (req, res, next) => {
  const _id = req.params.userId;
  try {
    const users = await user.find({ _id });
    if (!users.length) {
      throw new notFoundIdError('user');
    }
    res.send(users);
  } catch (err) {
    next(err);
  }
};
