import React from "react";
import NoteContext from "./NoteContext";
import Signup from "../Apis/auth/Signup";
import SignIn from "../Apis/auth/SignIn";
import CreateNote from "../Apis/notes/CreateNotes";
import fetchNotes from "../Apis/notes/fetchNotes";
import deleteNotes from "../Apis/notes/deleteNotes";
import editNotes from "../Apis/notes/editNotes";
import createTodo from "../Apis/todo/createTodo";
import deleteTodo from "../Apis/todo/DeleteTodo";
import fetchTodo from "../Apis/todo/fetchTodo";
import createLink from "../Apis/ImpLinks/createLink";
import deleteLink from "../Apis/ImpLinks/deleteLink";
import fetchLink from "../Apis/ImpLinks/fetchLinks";
import createSprint from "../Apis/Sprint/createSprint";
import deleteSprint from "../Apis/Sprint/deleteSprint";
import updateTime from "../Apis/Sprint/updateTime";
import fetchSprint from "../Apis/Sprint/fetchSprint";
import UpdateNotes from "../Apis/notes/UpdateNotes";
import CreateSchedule from "../Apis/schedule/CreateSchedule";
import deleteSchedule from "../Apis/schedule/deleteSchedule";
import fetchSchedule from "../Apis/schedule/fetchSchedule";
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
          createTodo,
          deleteTodo,
          fetchTodo,
          createLink,
          deleteLink,
          fetchLink,
          createSprint,
          deleteSprint,
          updateTime,
          fetchSprint,
          UpdateNotes,
          CreateSchedule,
          deleteSchedule,
          fetchSchedule,
        }}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteState;
