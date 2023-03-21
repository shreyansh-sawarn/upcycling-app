const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'rejected'],
    default: 'requested',
  },
  requestedDate: {
    type: Date,
    default: Date.now,
  },
  acceptedDate: {
    type: Date,
  },
  rejectedDate: {
    type: Date,
  },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
