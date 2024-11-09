const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB!');
  });
  