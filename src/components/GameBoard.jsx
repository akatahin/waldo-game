import { useState } from "react";
import Label from "./Label";
import Button from "./Button";
import { GAME_STATE } from "../constants";
import data from "../data/sample-data.json";
import GameImage from "./GameImage";

function GameBoard(props) {
  const [round, setRound] = useState(0);
  const [hints, setHints] = useState(["time", "50/50", "highlight"]);
  // Create function here to set state back to GAME_STATE.MENU
  const backToMenu = () => {
    props.setState(GAME_STATE.MENU);
  };

  const removeHint = (clickedHint) => {
    const results = hints.filter((hint) => hint !== clickedHint);
    setHints(results);
  };

  return (
    <div id="game-board">
      <Label className="gameBoardTitle" text="Waldo Game" />
      <Button buttonName="Menu" onClickHandler={backToMenu} />
      <GameImage round={round} setRound={setRound} />
      <Label
        className="gameBoardTitle"
        text={`Objective: ${data[round].objective}`}
      />

      {hints.includes("time") && (
        <Button
          buttonName="Time Dilation"
          onClickHandler={() => {
            // Tell the Timer to reset.
            removeHint("time");
          }}
        />
      )}
      {hints.includes("50/50") && (
        <Button
          buttonName="50/50 Image"
          onClickHandler={() => {
            // Tell the GameImage to draw the 50/50 Black Box.
            removeHint("50/50");
          }}
        />
      )}
      {hints.includes("highlight") && (
        <Button
          buttonName="Highlight"
          onClickHandler={() => {
            // Tell the GameImage to Highlight Around the Image.
            removeHint("highlight");
          }}
        />
      )}
    </div>
  );
}

export default GameBoard;
