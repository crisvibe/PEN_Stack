const pool = require('../config/db');

taskModel = {
  get: async () => {
    const query = 'SELECT * FROM tasks';
    const values = [];
    const request = await pool.query(query);
    console.log(request.rows);
    if (request.rows) {
      return request.rows;
    } else {
      console.error('Error fetching from DB');
    }
  }
}

module.exports = taskModel;