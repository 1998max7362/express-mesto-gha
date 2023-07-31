import card from "../../models/card.js";
import NotFoundIdError from "../../middlewares/Errors/notFoundId.js";

const likeCard = async (req, res, next) => {
  const { cardId } = req.params;
  const { _id } = req.user;
  try {
    const newCard = await card.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: _id } },
      { new: true, runValidators: true },
    );
    if (!newCard) {
      throw new NotFoundIdError("card");
    }
    res.send({ card: newCard });
  } catch (err) {
    next(err);
  }
};

export default likeCard;
