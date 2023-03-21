const express = require('express');
const router = express.Router();
const Artist = require('../models/artist');
const { verifyToken } = require('../utils/auth');
const { handleErrors } = require('../utils/errors');

// Get all artists
router.get('/', verifyToken, async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    handleErrors(error, res);
  }
});

// Get single artist
router.get('/:id', verifyToken, async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    res.json(artist);
  } catch (error) {
    handleErrors(error, res);
  }
});

// Create new artist
router.post('/', verifyToken, async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.json(artist);
  } catch (error) {
    handleErrors(error, res);
  }
});

// Update artist
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(artist);
  } catch (error) {
    handleErrors(error, res);
  }
});

// Delete artist
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Artist.findByIdAndRemove(req.params.id);
    res.json({ message: 'Artist deleted' });
  } catch (error) {
    handleErrors(error, res);
  }
});

module.exports = router;
