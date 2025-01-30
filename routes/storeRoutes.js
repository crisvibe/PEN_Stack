const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controllers/storeController');


// ---------------------------------------------------
// | Routes:

// Register new item

// Display all items
storeRouter.get('/', storeController.getAllProducts);
// Get Specific Item
storeRouter.get('/:id', storeController.displayProduct);
// Update Specific Product
storeRouter.put('/update/:id', storeController.updateProduct);
// Delete Product
storeRouter.delete('/:id', storeController.deleteProduct);

module.exports = storeRouter;