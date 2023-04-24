import React from "react";

function InputBox(props) {
  return (
    <div>
      <input value={props.inputVal} onChange={props.inputHandler}></input>
    </div>
  );
}

export default InputBox;
