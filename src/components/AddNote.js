import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const AddNote = (props) => {
  const Context = useContext(NoteContext);
  const { createnote } = Context;
  const [Note, SetNote] = useState({ title: "", description: "", tags: "" });

  const newNoteCreate = (event) => {
    event.preventDefault();
    createnote(Note.title, Note.description, Note.tags);
    SetNote({ title: "", description: "", tags: "" });
    props.showAlert("New note has been added");
  };

  const onchange = (event) => {
    SetNote({ ...Note, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          name="title"
          onChange={onchange}
          value={Note.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="description"
          onChange={onchange}
          value={Note.description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Tag1, Tag2...."
          name="tags"
          onChange={onchange}
          value={Note.tags}
        />
      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={newNoteCreate}
      >
        Create New Note
      </button>
    </>
  );
};

export default AddNote;
