const express = require("express");
const { createTodo } = require("../controllers/todo/createTodo");
const { deleteTodo } = require("../controllers/todo/deleteTodo");
const { fetchTodo } = require("../controllers/todo/fetchTodo");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();

//create.
router.post("/createTodo", fetchuser, createTodo);

//delete.
router.delete("/deleteTodo/:id", deleteTodo);
//fetch.
router.post("/fetchTodo",fetchuser, fetchTodo);
module.exports = router;
