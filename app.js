const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');

const app = express();
const mongoose = require('mongoose');

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressMongoSanitize());



// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Product', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Route Middlewares
const apiRoutes = require('./src/Routes/api');
app.use('/api', apiRoutes);

// 404 Error Route
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

module.exports = app;
