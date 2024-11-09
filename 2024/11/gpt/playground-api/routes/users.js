const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// GET /users - Retrieve all users
router.get('/', usersController.getAllUsers);

// POST /users - Add a new user
router.post('/', usersController.createUser);

// PATCH /users/:id - Update a user by their ID
router.patch('/:id', usersController.updateUser);

// DELETE /users/:id - Delete a user by their ID
router.delete('/:id', usersController.deleteUser);

module.exports = router;
