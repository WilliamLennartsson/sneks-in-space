export default class EntityManager {
  constructor(props) {
    this.entities = [];
    this.props = props
  }

  add(entity) {}

  remove(entity) {}

  update(deltaTime) {
    // Remove dead entities
    this.entities.filter(
      (entity) => !(Object.hasProperty("isDead") && entity.isDead)
    );
    this.entities.forEach((entity) => {
      entity.update(deltaTime);
    });
  }
  
  draw(ctx) {
    this.entities.forEach((entity) => {
      entity.draw(ctx);
    });
  }
}
