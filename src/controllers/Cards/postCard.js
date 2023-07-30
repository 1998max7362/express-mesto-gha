import card from "../../models/card.js";

export const postCard = async (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  try {
    const newCard = await card.create({ name, link, owner });
    res.send({ card: newCard, error: false });
  } catch (err) {
    res.status(500).send({ error: true, errorMessage: err.message });
  }
};
