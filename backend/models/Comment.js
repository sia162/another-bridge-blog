const mongoose = require("mongoose");

const CommmentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    email: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    com: {
      type: String,
      required: true,
    },
    reply: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommmentSchema);
