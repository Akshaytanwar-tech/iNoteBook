const Todo = require("../../models/todo");

const deleteTodo = async (req, res) => {
  //write code here
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { deleteTodo };
