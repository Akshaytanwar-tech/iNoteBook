import React, { useState } from "react";

function Schedule() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  // State for storing task input values
  const [taskInput, setTaskInput] = useState({
    taskName: "",
    startTime: "",
    endTime: "",
    additionalInfo: ""
  });
  // State for tracking the index of the task being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput({ ...taskInput, [name]: value });
  };

  // Function to handle form submission (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Concatenate start time and end time with a hyphen
    const timeFrame = `${taskInput.startTime} - ${taskInput.endTime}`;
    if (editIndex !== null) {
      // Edit task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { ...taskInput, timeFrame };
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, { ...taskInput, timeFrame }]);
    }
    // Clear input fields
    setTaskInput({
      taskName: "",
      startTime: "",
      endTime: "",
      additionalInfo: ""
    });
  };

  // Function to handle edit button click
  const handleEdit = (index) => {
    // Set task input values to the selected task
    const selectedTask = tasks[index];
    setTaskInput({
      taskName: selectedTask.taskName,
      startTime: selectedTask.startTime,
      endTime: selectedTask.endTime,
      additionalInfo: selectedTask.additionalInfo
    });
    setEditIndex(index);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Daily Schedule</h2>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Task</th>
                    <th scope="col">Time Frame</th>
                    <th scope="col">Additional Information</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{task.taskName}</td>
                        <td>{task.timeFrame}</td>
                        <td>{task.additionalInfo}</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(index)}>Edit</button>
                          {/* Add a delete button here if needed */}
                        </td>
                      </tr>
                      {editIndex === index && (
                        <tr>
                          <td colSpan="5">
                            <form onSubmit={handleSubmit}>
                              <div className="mb-3">
                                <label htmlFor="taskName" className="form-label">Task</label>
                                <input type="text" className="form-control" id="taskName" name="taskName" value={taskInput.taskName} onChange={handleInputChange} required />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="startTime" className="form-label">Start Time</label>
                                <input type="time" className="form-control" id="startTime" name="startTime" value={taskInput.startTime} onChange={handleInputChange} required />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="endTime" className="form-label">End Time</label>
                                <input type="time" className="form-control" id="endTime" name="endTime" value={taskInput.endTime} onChange={handleInputChange} required />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
                                <input type="text" className="form-control" id="additionalInfo" name="additionalInfo" value={taskInput.additionalInfo} onChange={handleInputChange} />
                              </div>
                              <button type="submit" className="btn btn-primary">{editIndex !== null ? "Update Task" : "Add Task"}</button>
                            </form>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
