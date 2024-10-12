import express from "express";
import "dotenv/config";
import mongoose, { Mongoose } from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the bookstore!");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGO_SECRET)
  .then(() => {
    console.log("Database connected!");
    app.listen(port, () => {
      console.log("App is working!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
