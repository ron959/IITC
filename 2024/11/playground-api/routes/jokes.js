const express = require('express');
const router = express.Router();
const { getAllJokes, createJoke, updateJoke, deleteJoke } = require('../controllers/jokesController');

// Get all jokes
router.get('/', getAllJokes);

// Create a new joke
router.post('/', createJoke);

// Update a joke by ID
router.patch('/:id', updateJoke);

// Delete a joke by ID
router.delete('/:id', deleteJoke);

module.exports = router;
