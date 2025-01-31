const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTasks);
// router.get('/', (req, res) => {
//   res.render('tasks', { message: 'Welcome to Tasks' });
// });

module.exports = router;