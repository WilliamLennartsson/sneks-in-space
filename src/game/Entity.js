const defaultProps = {
  name: 'Entity',
  pos: { x: 0, y: 0 },
  size: { w: 15, h: 15 },
  dir: { x: 0, y: 0 },
  rotation: {}, // Not needed for now
  maxSpeed: 10,
  color: "#993399",
};

export default class Entity {
  constructor(incomingProps) {
    const props = Object.assign(defaultProps, incomingProps)
    console.log(`Entity props`, props)

    this.name = props.name;
    this.pos = { x: 0, y: 0 };
    this.size = { w: 30, h: 30 };
    this.dir = { x: 0, y: 0 };
    this.rotation = {}; // Not needed for now
    this.maxSpeed = 10;
    this.color = "#339933";
    this.sprite = null;
  }

  draw() {}
  update(deltaTime) {}
}
