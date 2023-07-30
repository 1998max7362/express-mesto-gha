import card from "../../models/card.js";

export const likeCard = async (req, res) => {
  const cardId = req.params.cardId;
  const user_id = req.user._id;
  try {
    const newCard = await card.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: user_id } },
      { new: true }
    );
    res.send({ card: newCard, error: false });
  } catch (err) {
    next(err);
  }
};
