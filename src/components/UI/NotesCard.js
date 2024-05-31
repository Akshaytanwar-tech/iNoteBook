import React, { useContext, useRef, useState } from "react";
import NoteContext from "../../context/NoteContext";

const NotesCard = ({ title, content, tags, id }) => {
  const context = useContext(NoteContext);
  const { deleteNotes, UpdateNotes } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setnotes] = useState({
    etitle: "",
    econtent: "",
    etags: "",
  });
  const HandleEdit = () => {
    ref.current.click();
    setnotes({ etitle: title, econtent: content, etags: tags });
  };

  const HandleEditChange = (e) => {
    setnotes({ ...note, [e.target.name]: e.target.value });
  };

  const HandleEditSubmit = () => {
    UpdateNotes(note.etitle, note.econtent, note.etags, id);
    refClose.current.click();
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Notes
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  title
                </span>
                <input
                  type="text"
                  name="etitle"
                  class="form-control"
                  placeholder="title"
                  aria-label="Username"
                  onChange={HandleEditChange}
                  value={note.etitle}
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Description
                </span>
                <input
                  type="text"
                  name="econtent"
                  class="form-control"
                  placeholder="content"
                  aria-label="Username"
                  onChange={HandleEditChange}
                  value={note.econtent}
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Tags
                </span>
                <input
                  type="text"
                  name="etags"
                  class="form-control"
                  placeholder="tags"
                  aria-label="Username"
                  onChange={HandleEditChange}
                  value={note.etags}
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={HandleEditSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="note-card">
        <div class="note">
          <h3 class="note-title">{title}</h3>
          <p class="note-content">{content}</p>
          <div class="note-actions">
            <span
              class="btn-action"
              onClick={HandleEdit}
              style={{ cursor: "pointer" }}
            >
              &#9998;
            </span>
            <span
              class="btn-action"
              onClick={(e) => {
                deleteNotes(id);
              }}
              style={{ cursor: "pointer" }}
            >
              <i class="fa-solid fa-trash"></i>
            </span>
            <span class="btn-action" style={{ cursor: "pointer" }}>
              &#10132;
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesCard;
