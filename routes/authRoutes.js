const express = require('express');
const { signUpUser, signInUser } = require('../controllers/authController');
const router = express.Router();

// Route for sign-up
router.post('/users/register', signUpUser);

// Route for sign-in
router.post('/signin', signInUser);


module.exports = router;
