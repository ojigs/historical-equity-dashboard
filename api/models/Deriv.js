const mongoose = require("mongoose");

const DerivSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Deriv", DerivSchema);
