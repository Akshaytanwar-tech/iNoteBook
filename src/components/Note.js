import React from "react";
import { useContext } from "react";
import Notecard from "./Notecard";
import NoteContext from "../context/NoteContext";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Note = (props) => {
  const Allnotes = useContext(NoteContext);
  const { Notes } = Allnotes;

  return (
    <>
      <div className="row">
        {Notes.map((e) => {
          return (
            <div className="col-4" key={e._id}>
              <Notecard
                title={e.title}
                description={e.description}
                id={e._id}
                e={e}
                updatenote={props.updatenote}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Note;
