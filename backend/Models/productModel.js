const mongoose = require("mongoose");

mongoose.productSchema = new mongoose.Schema(
  {
    brand: String,
    rating: mongoose.SchemaTypes.Decimal128,
    price: mongoose.SchemaTypes.Decimal128,
    image: [],
    title: String,
    description: String,
    max_count: Number,
    category: String,
    subCategory: String,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", mongoose.productSchema);

