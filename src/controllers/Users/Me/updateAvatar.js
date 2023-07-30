import user from "../../../models/user.js";

export const updateAvatar = async (req, res) => {
  const { avatar } = req.body;
  const _id = req.user._id;
  try {
    const newUser = await user.findByIdAndUpdate(_id,{ avatar });
    res.send({ user: newUser, error: false });
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
