import user from "../../../models/user.js";

export const updateProfile = async (req, res, next) => {
  const { name, about } = req.body;
  const _id = req.user._id;
  try {
    const newUser = await user.findByIdAndUpdate(
      _id,
      { name, about },
      { runValidators: true, new: true }
    );
    res.send({ user: newUser });
  } catch (err) {
    next(err);
  }
};
