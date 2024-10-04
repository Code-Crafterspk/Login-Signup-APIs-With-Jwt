// controllers/productSearchController.js

const { db } = require('../config/firebaseConfig');

// Search products based on query (e.g., title, category, description)
exports.searchProducts = async (req, res) => {
  try {
    const queryParam = req.query.query.toLowerCase();
    
    const productsSnapshot = await db.collection('products').get();
    const matchingProducts = [];

    productsSnapshot.forEach(doc => {
      const product = doc.data();
      // Check if the query matches the title, category, or description
      if (
        product.title.toLowerCase().includes(queryParam) ||
        product.category.name.toLowerCase().includes(queryParam) ||
        product.description.toLowerCase().includes(queryParam)
      ) {
        matchingProducts.push(product);
      }
    });

    if (matchingProducts.length > 0) {
      return res.status(200).json({
        status: 'success',
        data: matchingProducts
      });
    } else {
      return res.status(404).json({
        status: 'error',
        message: 'No products found matching the query.'
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to search products',
      error: error.message
    });
  }
};

// Get specific product by ID
exports.getProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    
    const productDoc = await db.collection('products').doc(product_id).get();

    if (productDoc.exists) {
      return res.status(200).json({
        status: 'success',
        data: productDoc.data()
      });
    } else {
      return res.status(404).json({
        status: 'error',
        message: `Product with ID ${product_id} not found.`
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve product details',
      error: error.message
    });
  }
};
