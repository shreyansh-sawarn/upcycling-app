const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

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
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Error handling middleware
const { errorHandler } = require('./utils/errors');
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`App listening on port ${port}`));
