import mongoose, { model } from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
