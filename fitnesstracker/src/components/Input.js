import React from "react";

const input = (props) => {

  return (
      <div>
      <p>
        <label>Time (s)</label>
      </p>
        <input type="range" min="0" max="120" onChange={props.changed} value={props.value}></input>
      </div>
  );

}

export default input;
