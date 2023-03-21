const express = require('express');
const router = express.Router();
const itemController = require('../controllers/items');
const auth = require('../utils/auth');

// GET all items
router.get('/', itemController.getAllItems);

// GET a single item
router.get('/:id', itemController.getSingleItem);

// POST a new item
router.post('/', auth.authenticateToken, itemController.createItem);

// PUT update an existing item
router.put('/:id', auth.authenticateToken, itemController.updateItem);

// DELETE an item
router.delete('/:id', auth.authenticateToken, itemController.deleteItem);

module.exports = router;
