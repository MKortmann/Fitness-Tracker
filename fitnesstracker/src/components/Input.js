import React from "react";

const input = (props) => {

  return (
      <div>
        <label>Set Time</label>
        <input type="range" min="0" max="120" onChange={props.changed}></input>
      </div>
  );

}

export default input;
