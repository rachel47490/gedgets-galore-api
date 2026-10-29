// Entry point: sets up Express, connects to MongoDB, mounts routes
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./api/products');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gadgets-galore';

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Gadgets Galore API is running' }));
app.use('/products', productRoutes);

// Unknown routes
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

// Global error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON in request body' });
  }
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('DB connection failed:', err.message));