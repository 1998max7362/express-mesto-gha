import card from "../../models/card.js";
import { notFoundIdError } from "../../middlewares/Errors/notFoundId.js";

export const getCardById = async (req, res, next) => {
  const cardId = req.params.cardId;
  try {
    const cards = await card.find({ _id: cardId });
    if (!cards.length) {
      throw new notFoundIdError('card');
    }
    res.send(cards);
  } catch (err) {
    next(err);
  }
};
