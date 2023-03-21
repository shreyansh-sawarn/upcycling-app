const express = require('express');
const router = express.Router();

// Import controllers
const usersController = require('../controllers/users');
const itemsController = require('../controllers/items');
const artistsController = require('../controllers/artists');
const transactionsController = require('../controllers/transactions');

// User routes
router.post('/users', usersController.createUser);
router.get('/users/:id', usersController.getUserById);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Item routes
router.post('/items', itemsController.createItem);
router.get('/items', itemsController.getAllItems);
router.get('/items/:id', itemsController.getItemById);
router.put('/items/:id', itemsController.updateItem);
router.delete('/items/:id', itemsController.deleteItem);

// Artist routes
router.post('/artists', artistsController.createArtist);
router.get('/artists', artistsController.getAllArtists);
router.get('/artists/:id', artistsController.getArtistById);
router.put('/artists/:id', artistsController.updateArtist);
router.delete('/artists/:id', artistsController.deleteArtist);

// Transaction routes
router.post('/transactions', transactionsController.createTransaction);
router.get('/transactions', transactionsController.getAllTransactions);
router.get('/transactions/:id', transactionsController.getTransactionById);
router.put('/transactions/:id', transactionsController.updateTransaction);
router.delete('/transactions/:id', transactionsController.deleteTransaction);

module.exports = router;
