import { Router } from "express";

import { getUsers } from "../controllers/getUsers.js";
import { getUserById } from "../controllers/getUserById.js";
import { postUser } from "../controllers/postUser.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", postUser);

export { router };
