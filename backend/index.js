import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the bookstore!");
});

app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(500).send({
        message: "Send all 3 values",
      });
    }
    const NewBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(NewBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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
