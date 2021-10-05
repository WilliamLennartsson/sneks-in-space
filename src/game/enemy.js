import Entity from "./Entity";

const defaultEnemyProps = {
  pos: { x: 0, y: 0 },
  size: { w: 15, h: 15 },
  dir: { x: 0, y: 0 },
  rotation: {}, // Not needed for now
  maxSpeed: 10,
  color: "#993399",
}

export const createEnemy = (incomingProps) => {
  const props = Object.assign(defaultEnemyProps, incomingProps)
  console.log(`Enemy props: `, props)
  
  const enemy = new Entity();
  enemy.pos = { x: 0, y: 0 };
  enemy.size = { w: 15, h: 15 };
  enemy.dir = { x: 0, y: 0 };
  enemy.rotation = {}; // Not needed for now
  enemy.maxSpeed = 10;
  enemy.color = "#993399";

  enemy.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(enemy.pos.x, enemy.pos.y, enemy.size.w, enemy.size.h);
    // ctx.drawImage(spriteImage, enemy.pos.x, enemy.pos.y)
  };

  enemy.update = function (deltaTime) {
    this.pos.y += this.dir.y * this.maxSpeed * deltaTime;
  };

  return enemy;
};
