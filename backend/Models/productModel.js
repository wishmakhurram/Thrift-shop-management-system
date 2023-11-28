const mongoose = require("mongoose");

mongoose.productSchema = new mongoose.Schema(
  {
    brand: String,
    rating: mongoose.SchemaTypes.Decimal128,
    price: mongoose.SchemaTypes.Decimal128,
    image: String, 
    title: String,
    description: String,
    maxCount: Number,
    category: String,
    subCategory: String,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", mongoose.productSchema);

