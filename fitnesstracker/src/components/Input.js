import React from "react";

const input = (props) => {

  return (
      <div>
        <input type="range" min="0" max="59" onChange={props.changed} value={props.value}></input>
      </div>
  );

}

export default input;
