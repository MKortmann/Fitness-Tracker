import React from "react";


const button = (props) => {
  return (
    <div>
      <button onClick={props.startTimer}>{props.btnName}</button>
    </div>
  );
}

export default button;
