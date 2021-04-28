import { useState } from "react";
import Label from "./Label";
import Button from "./Button";
import { GAME_STATE } from "../constants";
import data from "../data/sample-data.json";
import GameImage from "./GameImage";

function GameBoard(props) {
  const [round, setRound] = useState(0);
  // Create function here to set state back to GAME_STATE.MENU
  const backToMenu = () => {
    props.setState(GAME_STATE.MENU);
  };

  return (
    <div id="game-board">
      <Label className="gameBoardTitle" text="Waldo Game" />
      <Button buttonName="Menu" onClickHandler={backToMenu} />
      <GameImage round={round} setRound={setRound} />
    </div>
  );
}

export default GameBoard;
