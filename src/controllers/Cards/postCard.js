import card from "../../models/card.js";

export const postCard = async (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  try {
    const newCard = await card.create({ name, link, owner });
    res.send({ card: newCard });
  } catch (err) {
    next(err);
  }
};
