import React, { useContext } from "react";
import NoteContext from "../../context/NoteContext";

const ImpLinkCard = ({ links }) => {
  const context = useContext(NoteContext);
  const { deleteLink } = context;
  const HandleOndelete = (id) => {
    deleteLink(id);
  };
  return (
    <>
      {links.map((e, i) => {
        return (
          <div className="col" key={i}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{e.title}</h5>
                <a href={e.link} class="card-text">
                  {e.link}
                </a>
                <div className="my-2">
                  <i
                    class="fa-solid fa-trash"
                    style={{ cursor: "pointer" }}
                    onClick={() => HandleOndelete(e._id)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImpLinkCard;
