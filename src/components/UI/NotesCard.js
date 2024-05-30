import React, { useContext } from "react";
import NoteContext from "../../context/NoteContext";

const NotesCard = ({ title, content, id }) => {
  const context = useContext(NoteContext);
  const { deleteNotes } = context;
  const HandleEdit = () => {
    
  }
  return (
    <>
      <div class="note-card">
        <div class="note">
          <h3 class="note-title">{title}</h3>
          <p class="note-content">{content}</p>
          <div class="note-actions">
            <span class="btn-action" style={{ cursor: "pointer" }}>
              &#9998;
            </span>
            <span
              class="btn-action"
              onClick={(e) => {
                deleteNotes(id);
              }}
              style={{ cursor: "pointer" }}
            >
              <i class="fa-solid fa-trash" onClick={HandleEdit}></i>
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
