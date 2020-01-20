class World {

    constructor(game, id, name, terrain, length, width, tiles) {
        this.id = id;
        this.name = name;
        this.terrain = terrain;
        this.map = new TileMap(game, this, terrain, length, width, tiles);
        this.entities = [];
    }

    update(delta) {
        for (let i = 0; i < this.entities.length; i++) {
            let entity = this.entities[i];

            entity.update(delta);
        }
    }

    render(graphics) {
        for (let i = 0; i < this.entities.length; i++) {
            let entity = this.entities[i];

            entity.render(graphics);
        }
    }
}