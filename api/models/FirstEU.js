const mongoose = require("mongoose");

const FirstEUSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("FirstEU", FirstEUSchema);
