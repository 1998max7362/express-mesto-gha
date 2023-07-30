import user from "../../../models/user.js";

export const updateProfile = async (req, res) => {
  const { name, about } = req.body;
  const _id = req.user._id;
  try {
    const newUser = await user.findByIdAndUpdate(_id,{ name, about });
    res.send({ user: newUser, error: false });
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
