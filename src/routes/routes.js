import { Router } from "express";

import { getUsers } from "../controllers/Users/getUsers.js";
import { getUserById } from "../controllers/Users/getUserById.js";
import { postUser } from "../controllers/Users/postUser.js";
import { getCards } from "../controllers/Cards/getCards.js";
import { getCardById } from "../controllers/Cards/getCardById.js";
import { postCard } from "../controllers/Cards/postCard.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", postUser);
router.get("/cards", getCards);
router.get("/cards/:cardId", getCardById);
router.post("/cards", postCard);

export { router };
