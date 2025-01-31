const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// ------------------------------------------------------

// Add new products
router.get('/add', storeController.addProductForm)
router.post('/add', storeController.addProduct)
// Display all items
router.get('/', storeController.getAllProducts);
// Get Specific Item
router.get('/:id', storeController.displayProduct);
// Update Specific Product
router.put('/update/:id', storeController.updateProduct);
// Delete Product
router.delete('/:id', storeController.deleteProduct);

module.exports = router;