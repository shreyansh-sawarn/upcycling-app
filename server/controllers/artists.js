const Artist = require('../models/artist');

// Get all artists
const getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    next(error);
  }
};

// Get an artist by ID
const getArtistById = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    next(error);
  }
};

// Create a new artist
const createArtist = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;
    const artist = new Artist({ name, email, bio });
    const newArtist = await artist.save();
    res.status(201).json(newArtist);
  } catch (error) {
    next(error);
  }
};

// Update an artist by ID
const updateArtistById = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;
    const artist = await Artist.findByIdAndUpdate(req.params.id, { name, email, bio }, { new: true });
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    next(error);
  }
};

// Delete an artist by ID
const deleteArtistById = async (req, res, next) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistById,
};
