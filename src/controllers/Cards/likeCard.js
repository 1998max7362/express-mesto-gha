import card from "../../models/card.js";
import { notFoundIdError } from "../../middlewares/Errors/notFoundId.js";

export const likeCard = async (req, res, next) => {
  const cardId = req.params.cardId;
  const user_id = req.user._id;
  try {
    const newCard = await card.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: user_id } },
      { new: true, runValidators: true }
    );
    if (!newCard) {
      throw new notFoundIdError('card');
    }
    res.send({ card: newCard });
  } catch (err) {
    next(err);
  }
};
