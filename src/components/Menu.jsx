import Label from "./Label";
import Button from "./Button";

function Menu(props) {

  const startGame = () => {
    props.setGameState;
  };
  
  return (
    <div id="menu">
      <Label className="menuTitle" text="Hi Menu"/>
      <Button buttonName="Start" onClickHandler={startGame}/>
      <Button buttonName="Score Board"/>
      <Button buttonName="Difficulty"/>
    </div>
  );
}

export default Menu;
