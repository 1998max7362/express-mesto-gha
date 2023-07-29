import user from "../models/user.js";

export const getUserById = async (req, res) => {
  const userId = req.params.userId
  console.log(userId)
  try {
    const users = await user.find({_id: userId});
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
