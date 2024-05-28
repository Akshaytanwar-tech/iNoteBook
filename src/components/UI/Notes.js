import React, { useState, useContext } from "react";
import NotesCard from "./NotesCard";
import NoteContext from "../../context/NoteContext";

const Notes = () => {
  const [Note, setNote] = useState({ title: "", content: "", tags: "" });
  const context = useContext(NoteContext);
  const { CreateNote } = context;
  // Handle the changes the input field
  const HandleonChange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  // Handle the submit of the form.
  const HandleonSubmit = () => {
    CreateNote(Note.title, Note.content, Note.tags);
    window.location.reload();
  };

  return (
    <>
      <div class="container container-note mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="note-form">
              <h2 class="mb-4">New Note</h2>
              <form onSubmit={HandleonSubmit}>
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Enter title"
                    onChange={HandleonChange}
                    value={Note.title}
                  />
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">
                    Content
                  </label>
                  <textarea
                    name="content"
                    class="form-control"
                    id="content"
                    rows="5"
                    placeholder="Enter content"
                    onChange={HandleonChange}
                    value={Note.content}
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="tags" class="form-label">
                    Tags
                  </label>
                  <input
                    name="tags"
                    type="text"
                    class="form-control"
                    id="tags"
                    placeholder="Enter tags (comma separated)"
                    onChange={HandleonChange}
                    value={Note.tags}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Save Note
                </button>
              </form>
            </div>
          </div>
          <NotesCard />
        </div>
      </div>
    </>
  );
};

export default Notes;
