const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  status: { type: String, enum: ['available', 'pending', 'sold'], default: 'available' },
  dateAdded: { type: Date, default: Date.now }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
