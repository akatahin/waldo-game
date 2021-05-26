import { useEffect, useRef } from "react";
import Label from "./Label";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Timer(props) {
  useInterval(() => {
    props.setTimer(props.timer - 1000);
  }, 1000);

  if (props.timer <= 0) {
    props.triggerGameOver();
  }

  const time = Math.max(props.timer / 1000, 0);
  return <Label className="gameBoardTimer" text={`Timer: ${time}`} />;
}

export default Timer;
