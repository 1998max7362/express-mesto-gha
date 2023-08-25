import { Router } from "express";

import postUser from "../controllers/Users/postUser.js";
import loginUser from "../controllers/Users/loginUser.js";

const authRouter = Router();

authRouter.post("/signup", postUser);
authRouter.post("/signin", loginUser);


export default authRouter;
