import card from "../../models/card.js";

export const dislikeCard = async (req, res, next) => {
  const cardId = req.params.cardId;
  const user_id = req.user._id;
  try {
    const newCard = await card.findByIdAndUpdate(
      cardId,
      { $pull: { likes: user_id } },
      { new: true, runValidators: true }
    );
    res.send({ card: newCard, error: false });
  } catch (err) {
    next(err);
  }
};
