import { Router } from "express";

import getUsers from "../controllers/Users/getUsers.js";
import getUserById from "../controllers/Users/getUserById.js";
import postUser from "../controllers/Users/postUser.js";
import updateAvatar from "../controllers/Users/Me/updateAvatar.js";
import updateProfile from "../controllers/Users/Me/updateProfile.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:userId", getUserById);
userRouter.post("/", postUser);
userRouter.patch("/me", updateProfile);
userRouter.patch("/me/avatar", updateAvatar);

export default userRouter;
