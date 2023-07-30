import card from "../../models/card.js";

export const getCards = async (req, res) => {
  try {
    const cards = await card.find({});
    res.send(cards);
  } catch (err) {
    next(err);
  }
};
