const User = require('../models/user');

// Controller function to get all users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Controller function to get a single user by ID
const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new user
const createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Controller function to update a user
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const user = await User.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Controller function to delete a user
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
