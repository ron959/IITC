const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    content: { type: String, required: true },
    category: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Joke', jokeSchema);
