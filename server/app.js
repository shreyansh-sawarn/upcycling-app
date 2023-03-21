const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Connect to database
const db = require('./utils/db');
db.connect();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const artistsRouter = require('./routes/artists');
const transactionsRouter = require('./routes/transactions');
app.use('/api/users', usersRouter);
app.use('/api/items', itemsRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/transactions', transactionsRouter);

module.exports = app;
