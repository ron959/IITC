const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  content: { type: String, required: true },
  category: { type: String, enum: ['Pun', 'Dad Joke', 'Knock-Knock'], default: 'Dad Joke' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Joke', jokeSchema);
