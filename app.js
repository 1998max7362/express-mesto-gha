import express from "express";
import { mongoose } from "mongoose";

const { PORT = 3000 } = process.env;

const app = express();

// useNewUrlParser, useCreateIndex, useFindAndModify как я понял, больше не нужны в mongo 6
mongoose.connect("mongodb://localhost:27017/mestodb");

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
