class GameHandler {
    constructor(game) {
        this.game = game;

        this.player = null;
        this.world = null;
    }

    update(screen, delta) {
        this.world.update(delta);
    }

    render(screen, graphics) {
        let camera = this.game.screen.camera;

        for (let x = camera.x; x < camera.x + (Global.WIDTH / Global.TILE_SIZE); x++) {
            for (let y = camera.y; y < camera.y + (Global.HEIGHT / Global.TILE_SIZE); y++) {

                let tile = this.world.map.getTile(x, y);
                if (tile === null)
                    continue;

                let image = this.game.resourceHandler.getResource(tile.image);
                if (image === null || image === undefined)
                    continue;

                graphics.drawImage(image, x* Global.TILE_SIZE, y* Global.TILE_SIZE, Global.TILE_SIZE, Global.TILE_SIZE);
            }
        }

        this.world.render(graphics);
    }
}