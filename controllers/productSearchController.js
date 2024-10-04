// controllers/productSearchController.js

const { db } = require('../config/firebaseConfig');

// Search for products by query (title, category, price range, etc.)
exports.searchProducts = async (req, res) => {
  try {
    const { query, category, minPrice, maxPrice } = req.query;

    let productsRef = db.collection('products');
    let queryRef = productsRef;

    // Search by title (case-insensitive)
    if (query) {
      queryRef = queryRef.where('title', '>=', query).where('title', '<=', query + '\uf8ff');
    }

    // Filter by category
    if (category) {
      queryRef = queryRef.where('category.name', '==', category);
    }

    // Filter by price range
    if (minPrice && maxPrice) {
      queryRef = queryRef.where('price', '>=', parseFloat(minPrice)).where('price', '<=', parseFloat(maxPrice));
    }

    const snapshot = await queryRef.get();
    const products = snapshot.docs.map(doc => doc.data());

    if (products.length > 0) {
      return res.status(200).json({ status: 'success', data: products });
    } else {
      return res.status(404).json({ status: 'error', message: 'No products found matching your search criteria.' });
    }
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to search products', error: error.message });
  }
};
