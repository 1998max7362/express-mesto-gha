import { Router } from "express";

import getCards from "../controllers/Cards/getCards.js";
import getCardById from "../controllers/Cards/getCardById.js";
import postCard from "../controllers/Cards/postCard.js";
import likeCard from "../controllers/Cards/likeCard.js";
import dislikeCard from "../controllers/Cards/dislikeCard.js";
import deleteCard from "../controllers/Cards/deleteCard.js";

const cardRouter = Router();

cardRouter.get("/", getCards);
cardRouter.get("/:cardId", getCardById);
cardRouter.post("/", postCard);
cardRouter.delete("/:cardId", deleteCard);
cardRouter.put("/:cardId/likes", likeCard);
cardRouter.delete("/:cardId/likes", dislikeCard);

export default cardRouter;
