import data from "../data/sample-data.json";
import React from "react";

function GameImage(props) {
  const { coordinates } = data[props.round];

  const { x: x1, y: y1 } = coordinates[0];
  const { x: x2, y: y2 } = coordinates[1];

  return (
    <React.Fragment>
      <img
        id="game-image"
        alt=""
        src={data[props.round].image}
        onClick={(e) => {
          console.log(`X:${e.pageX}, Y:${e.pageY}`);
        }}
      />
      <div
        id="target"
        style={{
          position: "absolute",
          border: "5px solid lime",
          width: `${x2 - x1}px`,
          height: `${y2 - y1}px`,
          top: `${y1}px`,
          left: `${x1}px`
        }}
        onClick={() => {
          console.log("YOU WIN!");
          if (props.round < data.length - 1) {
            props.setRound(props.round + 1);
          }
        }}
      />
      {/* Create a 50/50 Hint Component */}
    </React.Fragment>
  );
}
export default GameImage;
