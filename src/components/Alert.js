import React from "react";

const Alert = (props) => {
  return (
    <>
      {props.showAlert && (
        <div className="alert alert-primary" role="alert">
          {props.message}
        </div>
      )}
    </>
  );
};

export default Alert;
