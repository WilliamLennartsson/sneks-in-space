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

  const start = () => {
    // BG
    drawBackground();
    console.log("Game Started");
    running = true;

    requestAnimationFrame(update);
  };

  const stop = () => {
    console.log("Game Stopped");
    running = false;
    cancelAnimationFrame(animationFrame);
  };

  const update = (deltaTime) => {
    if (!running) return;
    if (!deltaTime) return;

    console.log(`player`, player);
    if (player) {
      player.update(deltaTime);
    }

    enemies.forEach((enemy) => {
      enemy.update(deltaTime);
    });

    draw();

    // animationFrame = requestAnimationFrame(update);
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
    console.log("Event code: ", event.code);
    const code = event.code;

    let dir = { x: 0, y: 0 };
    if (code === "KeyA") {
      dir.x -= 1;
    }
    if (code === "KeyS") {
      dir.y += 1;
    }
    if (code === "KeyD") {
      dir.x += 1;
    }
    if (code === "KeyW") {
      dir.y -= 1;
    }

    player.dir.x = dir.x;
    player.dir.y = dir.y;

    switch (code) {
      // Movement
      case "KeyA":
      case "KeyS":
      case "KeyD":
      case "KeyW":
      // Shoot
      case "Space":
      // Spells or items
      case "Digit1":
      case "Digit2":
      case "Digit3":
      default:
        break;
    }
  };

  // Return [ props, api ]
  return [{ player }, { start, stop, inputEvent }];
};
