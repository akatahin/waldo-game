import data from "../data/sample-data.json";

function GameImage(props) {
  return (
    <img
      id="game-image"
      alt=""
      src={data[props.round].image}
      onClick={() => {
        props.setRound(props.round + 1);
      }}
    />
  );
}
export default GameImage;
