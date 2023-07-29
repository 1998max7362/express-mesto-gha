import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import { mongoose } from "mongoose";
import { router } from "./src/routes/routes.js";
import { corsAllow } from "./src/middlewares/CORS.js";

const { PORT = 3000, MONGODB_URL } = process.env;
console.log('MONGODB_URL',MONGODB_URL)
// useNewUrlParser, useCreateIndex, useFindAndModify как я понял, больше не нужны в mongo 6
try {
  await mongoose.connect(MONGODB_URL);
  console.log("Database connection success");
} catch (err) {
  console.log(err);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsAllow);
app.use("/", router);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
