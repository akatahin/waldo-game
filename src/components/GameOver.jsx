import Label from "./Label";
import Button from "./Button";
import { GAME_STATE } from "../constants";

function GameOver(props) {
  const gameState = props.gameState;

  const gameOverLable =
    gameState === GAME_STATE.GAME_WIN ? "YOU WIN!!" : "GAME OVER!!!";

  return (
    <div id="game-over">
      <Label className="gameOver" text={gameOverLable} />
      <Button
        buttonName="Back To Menu"
        onClickHandler={() => {
          props.setGameState(GAME_STATE.MENU);
        }}
      />
      <Button
        buttonName="Restart"
        onClickHandler={() => {
          props.setGameState(GAME_STATE.GAME_BOARD);
        }}
      />
    </div>
  );
}

export default GameOver;
