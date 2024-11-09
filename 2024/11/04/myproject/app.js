require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


// Basic route for testing
app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

