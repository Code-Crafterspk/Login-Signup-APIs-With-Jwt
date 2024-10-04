// routes/productSearchRoutes.js

const express = require('express');
const router = express.Router();
const productSearchController = require('../controllers/productSearchController');

// Route to search products by query (title, category, description)
router.get('/products/search', productSearchController.searchProducts);

// Route to get specific product by ID
router.get('/products/:product_id', productSearchController.getProductById);

module.exports = router;
