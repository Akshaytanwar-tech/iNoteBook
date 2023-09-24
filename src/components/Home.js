import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import Note from "./Note";
import AddNote from "./AddNote";
import Alert from "./Alert";

const Home = () => {
  const [Notes, setnotes] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etags: "",
  });
  const [message, setMessage] = useState("");
  const Context = useContext(NoteContext);
  const { getnotes, editnote } = Context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const updatenote = (Note) => {
    ref.current.click();
    setnotes({
      id: Note._id,
      etitle: Note.title,
      edescription: Note.description,
      etags: Note.tags,
    });
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getnotes();
    }
    // eslint-disable-next-line
  }, []);
  const onchange = (e) => {
    setnotes({ ...Notes, [e.target.name]: e.target.value });
  };
  const onsubmit = () => {
    editnote(Notes.id, Notes.etitle, Notes.edescription, Notes.etags);
    setnotes({ id: "", etitle: "", edescription: "", etags: "" });
    refClose.current.click();
  };
  const showAlert = (mes) => {
    setMessage(mes);
    setTimeout(() => {
      showAlert();
    }, 2000);
  };
  return (
    <>
      <Alert showAlert={showAlert} message={message}/>
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
      </div>
    </>
  );
};

export default Home;
