const Todo = require("../../models/todo");

const createTodo = async (req, res) => {
  //write code here
  try {
    const { title, IsDone } = req.body;
    
    const todo = new Todo({ title, IsDone, user: userdata });
    await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { createTodo };
