// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a new product
router.post('/products', productController.createProduct);

module.exports = router;
