const Item = require('../models/item');

// Get all items
exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

// Create a new item
exports.createItem = async (req, res, next) => {
  const { name, description, imageUrl, price } = req.body;
  try {
    const item = new Item({
      name,
      description,
      imageUrl,
      price,
      user: req.user.id,
    });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

// Get a single item by ID
exports.getItemById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      const error = new Error('Item not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

// Update an existing item
exports.updateItem = async (req, res, next) => {
  const { name, description, imageUrl, price } = req.body;
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      const error = new Error('Item not found');
      error.statusCode = 404;
      throw error;
    }
    if (item.user.toString() !== req.user.id) {
      const error = new Error('Unauthorized');
      error.statusCode = 401;
      throw error;
    }
    item.name = name;
    item.description = description;
    item.imageUrl = imageUrl;
    item.price = price;
    await item.save();
    res.json(item);
  } catch (err) {
    next(err);
  }
};

// Delete an item
exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      const error = new Error('Item not found');
      error.statusCode = 404;
      throw error;
    }
    if (item.user.toString() !== req.user.id) {
      const error = new Error('Unauthorized');
      error.statusCode = 401;
      throw error;
    }
    await item.remove();
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    next(err);
  }
};
