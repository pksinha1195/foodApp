const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  quantity: {
    type: Number,
    requred: true,
  },
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // unique:true,
  },
  items: [itemSchema],
  totalAmount: {
    type: Number,
    default: 0,
  },
  totalItems: {
    type: Number,
    default : 0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
