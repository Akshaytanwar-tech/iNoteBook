import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import NoteContext from "../../context/NoteContext";
import Note from "../Note";
import AddNote from "../AddNote";
import Alert from "../Alert";
import "../../App.css";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  // const [Notes, setnotes] = useState({
  //   id: "",
  //   etitle: "",
  //   edescription: "",
  //   etags: "",
  // });
  // const [message, setMessage] = useState("");
  // const Context = useContext(NoteContext);
  // const { getnotes, editnote } = Context;
  // const ref = useRef(null);
  // const refClose = useRef(null);

  // const updatenote = (Note) => {
  //   ref.current.click();
  //   setnotes({
  //     id: Note._id,
  //     etitle: Note.title,
  //     edescription: Note.description,
  //     etags: Note.tags,
  //   });
  // };

  // let navigate = useNavigate();

  // // useEffect(() => {
  // //   if (!localStorage.getItem("token")) {
  // //     navigate("/login");
  // //   } else {
  // //     getnotes();
  // //   }
  // //   // eslint-disable-next-line
  // // }, []);
  // const onchange = (e) => {
  //   setnotes({ ...Notes, [e.target.name]: e.target.value });
  // };
  // const onsubmit = () => {
  //   editnote(Notes.id, Notes.etitle, Notes.edescription, Notes.etags);
  //   setnotes({ id: "", etitle: "", edescription: "", etags: "" });
  //   refClose.current.click();
  // };
  // const showAlert = (mes) => {
  //   setMessage(mes);
  //   setTimeout(() => {
  //     showAlert();
  //   }, 2000);
  // };
  return (
    <>
      {/* <Alert showAlert={showAlert} message={message}/>
      <div className="container my-2">
        <AddNote showAlert={showAlert} />
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edited Note
                </h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="etitle"
                    onChange={onchange}
                    value={Notes.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="edescription"
                    onChange={onchange}
                    value={Notes.edescription}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tag1, Tag2...."
                    name="etags"
                    onChange={onchange}
                    value={Notes.etags}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={refClose}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={onsubmit}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <Note updatenote={updatenote} />
      </div> */}

      <header class="header-homepage">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                @Student
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/notifications">
                      Notifications
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="px-2"></li>
                  <li class="nav-item">
                    {!localStorage.getItem("token") ? (
                      <Link class="button nav-link" to="/login">
                        Login
                      </Link>
                    ) : (
                      <button
                        type="button"
                        class="btn btn-warning"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div class="welcome-section">
        <div class="container">
          <h1>Welcome to @Student</h1>
          <p class="lead">Your all-in-one tool for academic success</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Link to="/notes" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Save Notes</h5>
                  <p class="card-text">
                    Easily save and organize your study notes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/schedule" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Daily Schedule</h5>
                  <p class="card-text">
                    Keep track of your daily activities and classes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/sprint" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Plan Sprint</h5>
                  <p class="card-text">
                    Set goals and plan sprints to achieve them.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/todo" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">To-Do List</h5>
                  <p class="card-text">
                    Stay organized with a to-do list for your tasks.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/implink" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Important Links</h5>
                  <p class="card-text">
                    Track your grades and academic progress.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <footer class="footer-homepage">
        <div class="container">
          <p>&copy; 2024 Student Companion. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
