import React from "react";

const NotesCard = () => {
  return (
    <>
      <div class="col-md-6">
        <div class="note-card">
          <div class="note">
            <h3 class="note-title">Note Title</h3>
            <p class="note-content">Note Content</p>
            <div class="note-actions">
              <span class="btn-action">&#9998;</span>
              <span class="btn-action">&#128465;</span>
              <span class="btn-action">&#10132;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesCard;
