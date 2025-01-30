// Glue the model with the views and template engine.
const storeModel = require('../model/storeModel');

const storeController = {
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
      const storeItem = await storeModel.findById(req.params.id);
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