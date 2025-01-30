const pool = require('../config/db');

const storeModel = {
  findAll: async () => {
    try {
      const query = 'SELECT * FROM product';
      const results = await pool.query(query);
      return results.rows;
    } catch (err) {
      // console.error('findAll Error:', err);
      throw err;
    }
  },

  findById: async (id) => {
    try {
      const query = 'SELECT * FROM product WHERE id = $1';
      const values = [id];
      const results = await pool.query(query, values);
      return results.rows[0]; // Return Object instead of array (results.rows)
    } catch (err) {
      // console.error('findById Error:', err);
      throw err;
    }
  },

  update: async (name, price, stock, id) => {
    try {
      const query = 'UPDATE product SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *';
      const values = [name, price, stock, id];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    try {
      const query = 'DELETE FROM product WHERE id = $1 RETURNING *';
      const values = [id];
      const result = await pool.query(query, values);
      // console.log(result)
      return result.rowCount > 0 ? result.rows[0] : 'No rows affected';
    } catch (err) {
      throw err;
    }
  }
}

module.exports = storeModel;