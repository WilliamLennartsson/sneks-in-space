import spriteImage from "../playerSprite.png";

export const createPlayer = ({ name } = { name: "Player" }) => {
  const player = new Player(name);
  player.pos = { x: 0, y: 0 };
  player.size = { w: 30, h: 30 };
  player.dir = { x: 0, y: 0 };
  player.rotation = {}; // Not needed for now
  player.maxSpeed = 10;
  player.color = "#339933";

  player.draw = (ctx) => {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.pos.x, player.pos.y, player.size.w, player.size.h);
    // ctx.drawImage(spriteImage, player.pos.x, player.pos.y)
  };

  player.update = (deltaTime) => {
    console.log(`this`, this);
    this.pos.x += this.dir.x * this.maxSpeed;
    this.pos.y += this.dir.y * this.maxSpeed;
  };

  return player;
};

export class Player {
  constructor(name) {
    // fix config
    this.name = name;
    this.pos = { x: 0, y: 0 };
    this.size = { w: 30, h: 30 };
    this.dir = { x: 0, y: 0 };
    this.rotation = {}; // Not needed for now
    this.maxSpeed = 10;
    this.color = "#339933";
  }

  draw() {}
  update(deltaTime) {}
}
