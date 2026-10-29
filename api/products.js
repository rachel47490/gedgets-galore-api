// CRUD routes for products
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Product');

const router = express.Router();

// Reject malformed IDs with 400
const validateId = (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }
  next();
};

// CREATE a product
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

// READ all products
router.get('/', async (req, res, next) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    next(err);
  }
});

// READ one product
router.get('/:id', validateId, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// UPDATE a product
router.put('/:id', validateId, async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// DELETE a product
router.delete('/:id', validateId, async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;