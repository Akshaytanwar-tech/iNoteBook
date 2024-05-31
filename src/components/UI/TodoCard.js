import React, { useContext } from "react";
import NoteContext from "../../context/NoteContext";

const TodoCard = ({ tasks }) => {
  const context = useContext(NoteContext);
  const { deleteTodo } = context;
  const handleDeleteTask = (id) => {
    console.log("this is working");
    deleteTodo(id);
  };
  return (
    <>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{task.title}</span>
            <span>
              <span className="mx-5">
                Completed
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </span>

              <button
                className="btn btn-sm btn-danger delete-btn"
                onClick={() => handleDeleteTask(task._id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoCard;
