import card from "../../models/card.js";
import { notFoundIdError } from "../../middlewares/Errors/notFoundId.js";

export const deleteCard = async (req, res, next) => {
  const cardId = req.params.cardId;
  try {
    const cards = await card.findByIdAndRemove({ _id: cardId });
    if (!cards) {
      throw new notFoundIdError("card");
    }
    res.send(cards);
  } catch (err) {
    next(err);
  }
};
