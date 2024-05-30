import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../context/NoteContext";
import TodoCard from "./TodoCard";

const Todo = () => {
  const context = useContext(NoteContext);
  const { createTodo, fetchTodo } = context;
  const [taskInput, setTaskInput] = useState("");
  const [tasks, settasks] = useState([]);
  useEffect(() => {
    fetchTodo().then((res) => {
      settasks(res);
    });
  }, [tasks]);
  const handleAddTask = (e) => {
    e.preventDefault();
    createTodo(taskInput);
    setTaskInput("");
    
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Todo List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <TodoCard tasks={tasks} />
      </div>
    </>
  );
};

export default Todo;
