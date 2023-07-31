import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { mongoose } from "mongoose";
import router from "./src/routes/routes.js";
import corsAllow from "./src/middlewares/CORS.js";
import errorHandler from "./src/middlewares/Errors/errorHandler.js";
import wrongRouteError from "./src/middlewares/Errors/wrongRoute.js";

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
app.use("/", router);
app.use(errorHandler);
app.use("*", wrongRouteError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
