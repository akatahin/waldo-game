import { useState } from "react";
import Label from "./Label";
import Button from "./Button";
import { GAME_STATE } from "../constants";
import data from "../data/sample-data.json";
import GameImage from "./GameImage";
import Timer from "./Timer";

function GameBoard(props) {
  const [round, setRound] = useState(0);
  const [hints, setHints] = useState(["time", "50/50", "highlight"]);

  // Hint hooks for every game image
  const [showHighlight, setShowHighlight] = useState(false);
  const [showHalf, setShowHalf] = useState(false);

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
      <GameImage
        round={round}
        setRound={setRound}
        showHighlight={showHighlight}
        setShowHighlight={setShowHighlight}
        showHalf={showHalf}
        setShowHalf={setShowHalf}
      />
      <Label
        className="gameBoardTitle"
        text={`Objective: ${data[round].objective}`}
      />
      <Timer timeLimit={data[round].time_limit}/>

      {hints.includes("time") && (
        <Button
          buttonName="Reset Timer"
          onClickHandler={() => {
            // Tell the Timer to reset.
            // Do this after we implement timer.
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

            setShowHalf(true);
          }}
        />
      )}
      {hints.includes("highlight") && (
        <Button
          buttonName="Highlight"
          onClickHandler={() => {
            // Tell the GameImage to Highlight Around the Image.
            removeHint("highlight");

            // Set the hint hook to true to toggle hint box for current round
            setShowHighlight(true);
          }}
        />
      )}
    </div>
  );
}

export default GameBoard;
