import card from "../../models/card.js";
import { NotFoundIdError } from "../../middlewares/Errors/notFoundId.js";
import { NotEnoughRightsError } from "../../middlewares/Errors/notEnoughRightsError.js";

const deleteCard = async (req, res, next) => {
  const { cardId } = req.params;
  const { userId } = req.user._id;
  try {
    // const foundCard = await card.findByIdAndRemove({ _id: cardId });
    const foundCard = await card.findById({ _id: cardId });
    if (!foundCard) {
      throw new NotFoundIdError("card");
    }
    if (foundCard.owner !== userId) {
      throw new NotEnoughRightsError();
    }
    res.send(foundCard);
  } catch (err) {
    next(err);
  }
};
export default deleteCard;
