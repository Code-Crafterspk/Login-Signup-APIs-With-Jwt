const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const productSearchRoutes = require('./routes/productSearchRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Authentication API!');
});

// Use the auth routes
app.use('/baseApi/auth', authRoutes);

// Use the auth and product search routes
app.use('/api/auth', authRoutes);
app.use('/api', productSearchRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
