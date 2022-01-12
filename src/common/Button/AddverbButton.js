import React from "react";
import "./addverbButton.css";

export const Button = (props) => {
  return (
    <div className="btn-container">
      <button class="btn" role="button" onClick={props.handleClick}>
        {props.name}
      </button>
    </div>
  );
};
