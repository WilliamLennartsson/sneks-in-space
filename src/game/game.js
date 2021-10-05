import { useState, useEffect } from "react";
import { createPlayer } from "./player";

export const useFakeLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return loading;
};

export const createGame = (props) => {
  console.log("Game props:", props);
  const ctx = props.canvas.getContext("2d");
  const player = createPlayer();
  const enemies = [];
  let running = false;

  let animationFrame;
  let previousTime = 0;

  const start = () => {
    // BG
    drawBackground();
    console.log("Game Started");
    running = true;
    requestAnimationFrame(() => { update(0) });
  };

  const stop = () => {
    console.log("Game Stopped");
    running = false;
    cancelAnimationFrame(animationFrame);
  };

  const update = (elapsedTime) => {
    const deltaTime = elapsedTime - previousTime
    if (!running) return;

    if (player) {
      player.update(deltaTime);
    }

    enemies.forEach((enemy) => {
      enemy.update(deltaTime);
    });

    draw();

    previousTime = elapsedTime
    animationFrame = requestAnimationFrame(update);
  };

  const draw = () => {
    // BG
    drawBackground();
    // Enemies
    enemies.forEach((enemy) => {
      enemy.draw(ctx);
    });
    // Player
    if (player) player.draw(ctx);
  };

  const drawBackground = () => {
    if (!ctx) return;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  const inputEvent = (event) => {
    const code = event.code;
    if (event.type == 'Digit1' && code == 'keydown') {
      spawnEnemy()
    }
    player.handleEvent(event, code)
    // ui.handleEvent(event, code) // TODO
    // Is this gonna be needed?
    // entities.forEach(entity => { entity.handleEvent(event, code) })
  };

  const spawnEnemy = () => {
    
  }

  // Return [ props, api ]
  return [{ player }, { start, stop, inputEvent }];
};
