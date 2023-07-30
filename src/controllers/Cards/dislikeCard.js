import card from "../../models/card.js";

export const dislikeCard = async (req, res) => {
  const cardId = req.params.cardId;
  const user_id = req.user._id;
  try {
    const newCard = await card.findByIdAndUpdate(
      cardId,
      {  $pull: { likes: user_id } },
      { new: true }
    );
    res.send({ card: newCard, error: false });
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
