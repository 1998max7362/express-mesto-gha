import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { mongoose } from "mongoose";
import corsAllow from "./src/middlewares/CORS.js";
import errorHandler from "./src/middlewares/Errors/errorHandler.js";
import wrongRouteError from "./src/middlewares/Errors/wrongRoute.js";
import cardRouter from "./src/routes/cardRoutes.js";
import userRouter from "./src/routes/userRoutes.js";

const { PORT = 3000, MONGODB_URL = "mongodb://0.0.0.0:27017/mestodb " } = process.env;

try {
  await mongoose.connect(MONGODB_URL);
  console.log("Database connection success");
} catch (err) {
  console.log(err);
}

const app = express();

app.use(corsAllow);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: "64c5a76b391b53c26311597f", // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});
app.use("/users", userRouter);
app.use("/cards", cardRouter);
app.use("*", wrongRouteError);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
