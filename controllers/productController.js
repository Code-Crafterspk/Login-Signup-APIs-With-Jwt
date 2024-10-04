// controllers/productController.js

const { db } = require('../config/firebaseConfig');
const productSchema = require('../models/productModel');

// Add a new product
exports.createProduct = async (req, res) => {
  try {
    const product = req.body;
    
    // Firestore: Add the product to the "products" collection
    const newProductRef = db.collection('products').doc();
    await newProductRef.set(product);
    
    return res.status(201).json({ status: 'success', message: 'Product added successfully!', data: product });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to add product', error: error.message });
  }
};
