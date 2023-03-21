const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');
const authMiddleware = require('../utils/auth');

// Retrieve all transactions
router.get('/', transactionController.getAllTransactions);

// Create new transaction
router.post('/', authMiddleware.verifyToken, transactionController.createTransaction);

// Retrieve single transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update transaction by ID
router.put('/:id', authMiddleware.verifyToken, transactionController.updateTransactionById);

// Delete transaction by ID
router.delete('/:id', authMiddleware.verifyToken, transactionController.deleteTransactionById);

module.exports = router;
