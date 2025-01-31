// Glue the model with the views and template engine.
const storeModel = require('../model/storeModel');

const storeController = {
  addProductForm: async (req, res) => {
    try {
      res.render('addProduct');
    } catch (err) {
      console.error('Error Registering Product', err);
      res.status(500).send('Error Registering Product');
    }
  },

  addProduct: async (req, res) => {
    try {
      const { name, price, stock } = req.body;
      const addProduct = await storeModel.add(name, price, stock);  
      console.log(addProduct);
      res.status(201).render('addProductConfirmation')
    } catch (err) {
      console.error('Error Registering Product', err);
      res.status(500).send('Error Registering Product');
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await storeModel.findAll();
      res.render('store', { data: products }); // Render is initialized using the middleware. No need to inport it.
    } catch (err) {
      console.error('Error Fetching Data', err);
      res.status(500).send('Error Fetching Data');
    }
  },

  displayProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const storeItem = await storeModel.findById(id);
      if (!storeItem) {
        console.warn(`Product with ID ${id} not found`);
        return res.status(404).render('error', { message: 'Product not found' });
      };
      res.render('product', { data: storeItem });

    } catch (err) {
      console.error('Error Fetching Data', err);
      res.status(500).send('Error Fetching Data');
    }
  },

  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, stock } = req.body;
      const updateQuery = await storeModel.update(name, price, stock, id);
      if (!updateQuery) {
        console.warn('Could not update product');
        return res.status(400).render('error', { message: 'Could not update product' });
      };
      console.log(updateQuery);
      res.status(200).send(updateQuery);
    } catch (err) {
      console.error('Error Updating Data:', err);
      res.status(500).send('Error Updating Data');
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteQuery = await storeModel.delete(id);

      // if (!deleteQuery) {
      //   return res.status(404).send({ message: 'Product not found' });
      // }

      console.log(deleteQuery);
      res.status(200).send(deleteQuery);
    } catch (err) {
      console.error('Error Deleting Data', err);
      res.status(500).send('Error Deleting Data');
    }
  }
}

module.exports = storeController;