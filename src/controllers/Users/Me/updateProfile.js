import user from "../../../models/user.js";

export const updateProfile = async (req, res, next) => {
  const { name, about } = req.body;
  const _id = req.user._id;
  try {
    const newUser = await user.findByIdAndUpdate(
      _id,
      { name, about },
      { runValidators: true }
    );
    res.send({ user: newUser, error: false });
  } catch (err) {
    next(err);
  }
};
