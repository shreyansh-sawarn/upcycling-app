const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});

mongoose.connection.on('error', (error) => {
  console.error(`Database connection error: ${error}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Database connection disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Database connection closed due to application termination');
    process.exit(0);
  });
});
