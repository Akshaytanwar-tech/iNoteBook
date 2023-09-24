import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  let notes = [];
  const [Notes, setNotes] = useState(notes);

  const getnotes = async () => {
    const response = await fetch(
      `http://localhost:5000/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const createnote = async (title, description, tags) => {
    const response = await fetch(
      `http://localhost:5000/api/notes/createnotes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tags }),
      }
    );
    const creatednote = await response.json();
    console.log(creatednote);
    setNotes(Notes.concat(creatednote));
  };
  const deletenote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const changednotes = Notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(changednotes);
  };
  const editnote = async (id, title, description, tags) => {
    const response = await fetch(
      `http://localhost:5000/api/notes/updatenotes/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tags }),
      }
    );
    await response.json;
    let newNote = JSON.parse(JSON.stringify(Notes));
    console.log(newNote);

    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        break;
      }
    }
    setNotes(newNote);
  };
  return (
    <div>
      <NoteContext.Provider
        value={{ Notes, createnote, getnotes, deletenote, editnote }}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteState;