import Label from "./Label";
import Button from "./Button";
import { GAME_STATE } from "../constants";

function Menu(props) {
  const startGame = () => {
    props.setGameState(GAME_STATE.GAME_BOARD);
  };

  return (
    <div id="menu">
      <Label className="menuTitle" text="Hi Menu" />
      <Button buttonName="Start" onClickHandler={startGame} />
      <Button buttonName="Score Board" />
      <Button buttonName="Difficulty" />
    </div>
  );
}

export default Menu;
