const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET /products - Retrieve all products
router.get('/', productsController.getAllProducts);

// POST /products - Add a new product
router.post('/', productsController.createProduct);

// PATCH /products/:id - Update a product by its ID
router.patch('/:id', productsController.updateProduct);

// DELETE /products/:id - Delete a product by its ID
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
