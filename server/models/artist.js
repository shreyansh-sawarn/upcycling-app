const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: String,
    location: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    profileImageUrl: String,
    website: String,
    specialties: [String],
  },
  { timestamps: true }
);

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
