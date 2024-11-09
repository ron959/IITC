const Joke = require('../models/joke');

// Get all jokes
const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new joke
const createJoke = async (req, res) => {
  const joke = new Joke({
    content: req.body.content,
    category: req.body.category
  });

  try {
    const newJoke = await joke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a joke
const updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    res.json(joke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a joke
const deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    res.json({ message: 'Joke deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllJokes, createJoke, updateJoke, deleteJoke };
