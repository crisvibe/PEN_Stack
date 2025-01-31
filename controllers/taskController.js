const taskModel = require('../model/taskModel');

const taskConroller = {
  getTasks: async (req, res) => {
    const results = await taskModel.get();
    res.render('tasks', { message: 'Welcome to the Task Manager', data: results });
  }
}

module.exports = taskConroller;