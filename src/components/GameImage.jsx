import data from "../data/sample-data.json";
import React from "react";

function GameImage(props) {
  const { coordinates, hints_coordinate } = data[props.round];

  const { x: x1, y: y1 } = coordinates[0];
  const { x: x2, y: y2 } = coordinates[1];

  const { x: hx1, y: hy1 } = hints_coordinate[0];
  const { x: hx2, y: hy2 } = hints_coordinate[1];

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
          border: props.showHighlight ? "5px solid lime" : "none",
          width: `${x2 - x1}px`,
          height: `${y2 - y1}px`,
          top: `${y1}px`,
          left: `${x1}px`
        }}
        onClick={() => {
          console.log("YOU WIN!");
          // Reset hint for highlight
          props.setShowHighlight(false);
          props.setShowHalf(false);
          if (props.round < data.length - 1) {
            props.setRound(props.round + 1);
          }
        }}
      />
      {props.showHalf ? (
        <div
          id="half-box"
          style={{
            position: "absolute",
            backgroundColor: "black",
            width: `${hx2 - hx1}px`,
            height: `${hy2 - hy1}px`,
            top: `${hy1}px`,
            left: `${hx1}px`
          }}
        />
      ) : null}
    </React.Fragment>
  );
}
export default GameImage;
