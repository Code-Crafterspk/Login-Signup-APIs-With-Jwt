// routes/productSearchRoutes.js

const express = require('express');
const router = express.Router();
const productSearchController = require('../controllers/productSearchController');

// Route for searching products
router.get('/products/search', productSearchController.searchProducts);

module.exports = router;
