import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the bookstore!");
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
