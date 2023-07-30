import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { mongoose } from "mongoose";
import { router } from "./src/routes/routes.js";
import { corsAllow } from "./src/middlewares/CORS.js";
import { auth } from "./src/middlewares/tempAuth.js";
import { errorHandler } from "./src/middlewares/Errors/errorHandler.js";

const { PORT = 3000, MONGODB_URL = "mongodb://0.0.0.0:27017/mestodb " } =
  process.env;

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
app.use(auth);
app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
