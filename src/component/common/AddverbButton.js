import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <div>
      <button className="button" onClick={props.handleClick}>
        {props.name}
      </button>
    </div>
  );
};
