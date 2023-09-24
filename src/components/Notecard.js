import React from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const Notecard = (props) => {
  const Context = useContext(NoteContext);
  const { deletenote } = Context;
  const { updatenote, e } = props;
  return (
    <>
      <div className="card my-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.description}</p>
          <div>
            <i
              className="bi bi-archive-fill px-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                deletenote(props.id);
              }}
            ></i>
            <i
              className="bi bi-pen-fill"
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(e);
                updatenote(e);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notecard;
