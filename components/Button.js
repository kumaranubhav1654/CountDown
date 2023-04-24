import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.btnHandler}>{props.btnText}</button>
    </div>
  );
}

export default Button;
