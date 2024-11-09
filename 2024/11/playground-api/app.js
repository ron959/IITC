const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Import routes
const jokesRoutes = require('./routes/jokes');

// Use routes
app.use('/jokes', jokesRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


