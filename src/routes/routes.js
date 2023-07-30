import { Router } from "express";

import { getUsers } from "../controllers/Users/getUsers.js";
import { getUserById } from "../controllers/Users/getUserById.js";
import { postUser } from "../controllers/Users/postUser.js";
import { getCards } from "../controllers/Cards/getCards.js";
import { getCardById } from "../controllers/Cards/getCardById.js";
import { postCard } from "../controllers/Cards/postCard.js";
import { updateAvatar } from "../controllers/Users/Me/updateAvatar.js";
import { updateProfile } from "../controllers/Users/Me/updateProfile.js";
import { likeCard } from "../controllers/Cards/likeCard.js";
import { dislikeCard } from "../controllers/Cards/dislikeCard.js";
import { deleteCard } from "../controllers/Cards/deleteCard.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", postUser);
router.patch("/users/me", updateProfile);
router.patch("/users/me/avatar", updateAvatar);

router.get("/cards", getCards);
router.get("/cards/:cardId", getCardById);
router.post("/cards", postCard);
router.delete("/cards/:cardId", deleteCard);
router.put("/cards/:cardId/likes", likeCard);
router.delete("/cards/:cardId/likes", dislikeCard);

export { router };
