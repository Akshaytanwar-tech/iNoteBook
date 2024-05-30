const Todo = require("../../models/todo");
const fetchTodo = async (req, res) => {
  //write code here
  try {
    const todos = await Todo.find({ user: userdata });
    res.send(todos);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = { fetchTodo };
