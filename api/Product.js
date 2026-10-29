// Product schema: defines the shape and validation rules
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'name is required'], trim: true },
    description: { type: String, default: '', trim: true },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      min: [0, 'quantity cannot be negative'],
      validate: {
        validator: Number.isInteger,
        message: 'quantity must be a whole number'
      }
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      min: [0.01, 'price must be a positive number']
    },
    category: { type: String, required: [true, 'category is required'], trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);