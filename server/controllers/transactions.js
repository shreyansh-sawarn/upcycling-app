const Transaction = require('../models/transaction');

// Get all transactions
exports.getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

// Create a new transaction
exports.createTransaction = async (req, res, next) => {
  const { item, artist, price } = req.body;
  const transaction = new Transaction({
    item,
    artist,
    price,
  });
  try {
    const createdTransaction = await transaction.save();
    res.status(201).json(createdTransaction);
  } catch (error) {
    next(error);
  }
};

// Get a single transaction by ID
exports.getTransactionById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

// Update a transaction by ID
exports.updateTransactionById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

// Delete a transaction by ID
exports.deleteTransactionById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    next(error);
  }
};
