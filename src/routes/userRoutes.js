import { Router } from "express";

import getUsers from "../controllers/Users/getUsers.js";
import getUserById from "../controllers/Users/getUserById.js";
import updateAvatar from "../controllers/Users/Me/updateAvatar.js";
import updateProfile from "../controllers/Users/Me/updateProfile.js";
import getMe from "../controllers/Users/Me/getMe.js";

const userRouter = Router();

userRouter.get("/me", getMe);
userRouter.patch("/me", updateProfile);
userRouter.patch("/me/avatar", updateAvatar);
userRouter.get("/", getUsers);
userRouter.get("/:userId", getUserById);



export default userRouter;
