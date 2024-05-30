import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../context/NoteContext";
import SprintCard from "./SprintCard";

const Sprint = () => {
  const context = useContext(NoteContext);
  const { createSprint, fetchSprint } = context;
  const [sprint, setsprint] = useState([]);
  useEffect(() => {
    fetchSprint().then((res) => {
      setsprint(res);
    });
  }, [sprint]);
  const [tasks, settasks] = useState({
    task: "",
    subtask: "",
    timeframe: Number,
  });

  const HandleOnChange = (e) => {
    // this is change handler
    settasks({ ...tasks, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    // this is submit handler
    e.preventDefault();
    createSprint(tasks.task, tasks.subtask, tasks.timeframe);
    settasks({
      task: "",
      subtask: "",
      timeframe: Number,
    });
  };
  return (
    <>
      <div className="container my-3  border">
        <div className="container my-3 d-flex justify-content-center h3">
          Save your Sprint
        </div>
        <form onSubmit={handleOnSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              task
            </span>
            <input
              type="text"
              name="task"
              class="form-control"
              placeholder="Enter your tasks here"
              aria-label="Username"
              value={tasks.task}
              onChange={HandleOnChange}
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              subtasks
            </span>
            <textarea
              type="text"
              name="subtask"
              class="form-control"
              placeholder="Enter your sub-tasks here"
              aria-label="Username"
              value={tasks.subtask}
              onChange={HandleOnChange}
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Time Frame
            </span>
            <input
              type="number"
              name="timeframe"
              class="form-control"
              placeholder="enter your timeframe here"
              aria-label="Username"
              value={tasks.timeframe}
              onChange={HandleOnChange}
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-flex justify-content-center pb-3">
            <button type="submit" class="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {sprint.map((e, i) => {
          return (
            <SprintCard
              task={e.task}
              Subtasks={e.Subtasks}
              id={e._id}
              days={e.timeFrame}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default Sprint;
