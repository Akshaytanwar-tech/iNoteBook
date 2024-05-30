import React, { useContext, useEffect, useState } from "react";
import ImpLinkCard from "./ImpLinkCard";
import NoteContext from "../../context/NoteContext";

const ImpLinks = () => {
  const context = useContext(NoteContext);
  const { createLink, fetchLink } = context;
  const [allLinks, setallLinks] = useState([]);
  const [Link, setLink] = useState({ title: "", link: "" });
  useEffect(() => {
    fetchLink().then((res) => {
      setallLinks(res);
    });
  }, [allLinks]);
  const HandleSubmit = (e) => {
    // this is handle submit
    e.preventDefault();
    createLink(Link.title, Link.link);
    setLink({
      title: "",
      link: "",
    });
  };
  const HandleonChange = (e) => {
    setLink({ ...Link, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <div className="d-flex justify-content-center h3">
          Save your Important Links Here
        </div>
        <form onSubmit={HandleSubmit}>
          <div class="input-group flex-nowrap my-3">
            <span class="input-group-text" id="addon-wrapping">
              Title
            </span>
            <input
              type="text"
              name="title"
              class="form-control"
              placeholder="Give title here"
              aria-label="title"
              value={Link.title}
              onChange={HandleonChange}
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              Link
            </span>
            <input
              type="text"
              name="link"
              class="form-control"
              placeholder="Give Link here"
              aria-label="link"
              value={Link.link}
              onChange={HandleonChange}
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="container d-flex justify-content-center my-3">
            <button type="submit" class="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          <ImpLinkCard links={allLinks} />
        </div>
      </div>
    </>
  );
};

export default ImpLinks;
