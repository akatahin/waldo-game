import { useState } from "react";
import "./styles.css";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import { GAME_STATE } from "./constants";

export default function App() {
  // State for the game
  const [gameState, setGameState] = useState(GAME_STATE.MENU);

  return (
    <div className="App">
      {gameState === GAME_STATE.MENU && <Menu setState={setGameState} />}
      {gameState === GAME_STATE.GAME_BOARD && (
        <GameBoard setState={setGameState} />
      )}
    </div>
  );
}
