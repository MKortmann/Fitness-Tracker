import React from "react";

const input = (props) => {

  return (
      <div>
        <label>Set Time</label>
        <input type="range" onChange={props.changed}></input>
      </div>
  );

}

export default input;
