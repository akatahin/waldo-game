import { useState, useEffect, useRef } from "react";
import Label from "./Label";

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     let id = setInterval(() => {
//       savedCallback.current();
//     }, delay);
//     return () => clearInterval(id);
//   }, [delay]);
// }

function Timer(props) {
const [timer, setTimer] = useState(props.timeLimit);

//   useInterval(() => {
//     setTimer(timer - 1000)
//   }, 1000)

return <Label className="gameBoardTimer" text={`Timer: ${timer}`} />;
}

export default Timer;
