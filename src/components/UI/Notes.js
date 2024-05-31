import React, { useState, useContext, useEffect } from "react";
import NotesCard from "./NotesCard";
import NoteContext from "../../context/NoteContext";

const Notes = () => {
  const [Note, setNote] = useState({ title: "", content: "", tags: "" });
  const [notes, setnotes] = useState([]);
  const context = useContext(NoteContext);
  const { CreateNote, fetchNotes } = context;

  useEffect(() => {
    fetchNotes().then((res) => {
      setnotes(res);
    });
    // eslint-disable-next-line
  }, [notes]);
  // Handle the changes the input field
  const HandleonChange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  // Handle the submit of the form.
  const HandleonSubmit = (e) => {
    e.preventDefault();
    CreateNote(Note.title, Note.content, Note.tags);
    setNote({ title: "", content: "", tags: "" });
    // window.location.reload();
  };

  return (
    <>
      <div class="container container-note mt-3">
        <div class="row">
          <div class="col">
            <div class="note-form">
              <h2 class="mb-4 text-center">Add your notes here</h2>
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
        </div>
      </div>
      <div className="container px-5">
        <div className="row g-2">
          {notes.map((e, i) => {
            return (
              <div className="col-6" key={i}>
                <NotesCard
                  title={e.title}
                  content={e.description}
                  tags={e.tags}
                  id={e._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
