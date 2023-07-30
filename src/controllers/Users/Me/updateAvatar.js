import user from "../../../models/user.js";

export const updateAvatar = async (req, res, next) => {
  const { avatar } = req.body;
  const _id = req.user._id;
  try {
    const newUser = await user.findByIdAndUpdate(
      _id,
      { avatar },
      { runValidators: true }
    );
    res.send({ user: newUser });
  } catch (err) {
    next(err);
  }
};
