import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import { mongoose } from "mongoose";
import { router } from "./src/routes/routes.js";
import { corsAllow } from "./src/middlewares/CORS.js";
import { auth } from "./src/middlewares/tempAuth.js";

const { PORT = 3000, MONGODB_URL } = process.env;

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


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
