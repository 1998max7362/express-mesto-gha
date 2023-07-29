import { Router } from "express";

import { getUsers } from "../controllers/Users/getUsers.js";
import { getUserById } from "../controllers/Users/getUserById.js";
import { postUser } from "../controllers/Users/postUser.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", postUser);

export { router };
