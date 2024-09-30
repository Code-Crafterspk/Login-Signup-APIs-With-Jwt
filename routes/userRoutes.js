const express = require('express');
const { getUserProfile } = require('../controllers/userController');
const router = express.Router();

// Define the route for getting user profile
router.get('/profile/:user_id', getUserProfile);

module.exports = router;
