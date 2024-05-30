import React, { useContext } from "react";
import NoteContext from "../../context/NoteContext";

const SprintCard = ({ task, Subtasks, days, id }) => {
  const context = useContext(NoteContext);
  const { deleteSprint } = context;
  return (
    <>
      <div class="card my-2">
        <h5 class="card-header">{task}</h5>
        <div class="card-body d-flex justify-content-between">
          <p class="card-text">{Subtasks}</p>
          <p>
            {days} Days left
            <span>
              <i
                class="fa-solid fa-trash px-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteSprint(id);
                }}
              ></i>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SprintCard;
