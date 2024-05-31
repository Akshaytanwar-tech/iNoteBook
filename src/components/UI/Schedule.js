import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../context/NoteContext";

function Schedule() {
  const context = useContext(NoteContext);
  const { CreateSchedule, fetchSchedule, deleteSchedule } = context;
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    fetchSchedule().then((res) => {
      setSchedules(res);
    });
  }, [schedules]);
  const [formData, setFormData] = useState({
    date: "",
    subject: "",
    startTime: "",
    endTime: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateSchedule(
      formData.date,
      formData.subject,
      formData.startTime,
      formData.endTime,
      formData.notes
    );

    setFormData({
      date: "",
      subject: "",
      startTime: "",
      endTime: "",
      notes: "",
    });
    alert("Timetable saved successfully!");
  };

  const HandleDeleteSchedule = (id) => {
    deleteSchedule(id);
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Daily Study Timetable</h2>
      <div className="form-container p-4 bg-light rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="startTime">Start Time</label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="endTime">End Time</label>
              <input
                type="time"
                className="form-control"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              className="form-control"
              id="notes"
              name="notes"
              rows="3"
              placeholder="Enter notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Save Timetable
          </button>
        </form>
      </div>

      <div className="mt-5">
        <h3 className="text-center mb-4">Saved Timetable</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Subject</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.subject}</td>
                <td>{entry.starttime}</td>
                <td>{entry.endtime}</td>
                <td className="d-flex justify-content-between">
                  <span>{entry.workDes}</span>
                  <span>
                    <i
                      class="fa-solid fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        HandleDeleteSchedule(entry._id);
                      }}
                    ></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;
