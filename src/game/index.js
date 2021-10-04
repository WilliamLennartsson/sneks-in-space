import { useRef, useEffect } from "react";
import { createGame, useFakeLoader } from "./game";
import Loader from "./Loader"; // Shitty name. DOesnt load anything. Just a spinner component

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Dynamic resizing later on?
    canvas.width = 400;
    canvas.height = 400;
    const [gameProps, gameApi] = createGame({ canvas });

    // Bind inputevents
    ["keydown", "keyup"].forEach((eventName) => {
      window.addEventListener(eventName, (event) => {
        gameApi.inputEvent(event);
      });
    });

    gameApi.start();

    return () => {
      gameApi.stop();
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;

export const GameLoader = () => {
  const loading = useFakeLoader();
  return loading ? <Loader /> : <Game />;
};
