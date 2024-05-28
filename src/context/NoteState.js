import React from "react";
import NoteContext from "./NoteContext";
import Signup from "../Apis/auth/Signup";
import SignIn from "../Apis/auth/SignIn";
import CreateNote from "../Apis/notes/CreateNotes";
import fetchNotes from "../Apis/notes/fetchNotes";
import deleteNotes from "../Apis/notes/deleteNotes";
import editNotes from "../Apis/notes/editNotes";
const NoteState = (props) => {
  return (
    <div>
      <NoteContext.Provider
        value={{
          Signup,
          SignIn,
          CreateNote,
          fetchNotes,
          deleteNotes,
          editNotes,
        }}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteState;
