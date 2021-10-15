const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: false,
      default: "Aditi Varma",
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
      default: "Lifestyle",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
