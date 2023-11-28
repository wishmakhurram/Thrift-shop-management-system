const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    product: {
        type: String,
        required: true,
      },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: mongoose.SchemaTypes.Decimal128,
      required: true,
    },

    totalAmount: {
      type: mongoose.SchemaTypes.Decimal128,
      required: true,
    },
    transectionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "shipped",
    },
  },
  {
    timestamp: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
