import React from "react";

// app component

const Button = (props) => {
  return (
    <div className={props.type ? "btn "+props.type : "btn"} onClick={props.onClick}>
      {props.text}
    </div>
  );
};


export default Button;