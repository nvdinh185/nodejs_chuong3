const mongoose = require("mongoose");

const newsModel = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("news", newsModel);
