const express = require("express");
const { createTodo } = require("../controllers/todo/createTodo");
const { deleteTodo } = require("../controllers/todo/deleteTodo");
const { fetchTodo } = require("../controllers/todo/fetchTodo");
const router = express.Router();

//create.
router.post("createTodo", createTodo);

//delete.
router.delete("deleteTodo", deleteTodo);
//fetch.
router.post("fetchTodo", fetchTodo);
module.exports = router;
