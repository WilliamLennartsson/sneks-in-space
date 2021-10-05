import spriteImage from "../playerSprite.png";
import Entity from "./Entity";

const defaultPlayerProps = {
  pos: { x: 0, y: 0 },
  size: { w: 15, h: 15 },
  dir: { x: 0, y: 0 },
  rotation: {}, // Not needed for now
  maxSpeed: 10,
  color: "#993399",
};

export const createPlayer = (incomingProps) => {
  const props = Object.assign(defaultPlayerProps, incomingProps);
  const player = new Entity(props);
  player.pos = { x: 0, y: 0 };
  player.size = { w: 30, h: 30 };
  player.dir = { x: 0, y: 0 };
  player.rotation = {}; // Not needed for now
  player.maxSpeed = 10;
  player.color = "#339933";

  player.draw = function(ctx) {
    console.log(`ctx`, ctx)
    if (ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
      // ctx.drawImage(spriteImage, this.pos.x, this.pos.y)
    } else {
      console.log("as")
    }
  };

  player.update = function(deltaTime){
    console.log(`this`, this);
    this.pos.x += this.dir.x * this.maxSpeed;
    this.pos.y += this.dir.y * this.maxSpeed;
  };

  return player;
};


