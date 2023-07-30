import card from "../../models/card.js";

export const getCardById = async (req, res, next) => {
  const cardId = req.params.cardId;
  try {
    const cards = await card.find({ _id: cardId });
    res.send(cards);
  } catch (err) {
    next(err);
  }
};
