import Label from "../components/Label";
import Button from "../components/Button";
import { GAME_STATE } from "../constants";
import data from "../data/sample-data.json"

function GameBoard(props) {
  // Create function here to set state back to GAME_STATE.MENU
  const backToMenu = () => {
    props.setState(GAME_STATE.MENU);
  };

  return(
    <div id="gameBoard">
      <Label className="gameBoardTitle" text="Waldo Game" />
      <Button buttonName="Menu" onClickHandler={backToMenu} />
      <img src={data[0].image}></img>
    </div>
  );
}

export default GameBoard;