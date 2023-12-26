import mongoose, { Types } from "mongoose";

const billSchema = new mongoose.Schema(
  {
    userId: { type: Types.ObjectId, ref: "User" },
    cartId: { type: Types.ObjectId, ref: "Cart" },
    shippingAddress: String,
    shippingFee: Number,
    totalPrice: Number,
    totalOrder: Number,
    paymentMethod: String,
    products: [
      {
        productId: { type: Types.ObjectId, ref: "Product" },
        quantity: Number,
        price: Number,
      },
    ],
    paymentStatus: {
      type: String,
      enum: ["Paid", "UnPaid"],
      default: "UnPaid",
    },
    status: {
      type: String,
      enum: ["Chờ xác nhận", "Hủy đơn hàng", "Đã xác nhận", "Đã giao hàng", "Đang giao hàng"],
      default: "Chờ xác nhận",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Bill", billSchema);
