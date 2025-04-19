const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    info: { type: String, required: true },
  },
  { timestamps: true }
);

let Product = mongoose.model("Product", ProductSchema);
module.exports = Product;