const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokesController');

router.get('/', jokesController.getAllJokes);
router.post('/', jokesController.createJoke);
router.patch('/:id', jokesController.updateJoke);
router.delete('/:id', jokesController.deleteJoke);

module.exports = router;
