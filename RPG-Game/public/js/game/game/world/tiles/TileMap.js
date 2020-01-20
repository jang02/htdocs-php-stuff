class TileMap {
    constructor(game, map, terrain, length, width, tileArray) {
        this.length = length;
        this.width = width;

        let tiles = [];
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < width; y++) {

                let found = false;

                tileArray.forEach(function (value, index, array) {
                    if (parseInt(value[0]) === x && parseInt(value[1]) === y) {
                        tiles.push(new Tile(terrain, x, y, (value[2] + "").split(".")[0], value[3], value[4]));
                    }
                });

                if (!found)
                    tiles.push(null);
            }
        }
        this.tiles = tiles;
    }

    getTile(x, y) {
        if (x < 0 || x >= this.length || y < 0 || y >= this.length)
            return null;

        return this.tiles[x + (y * this.width)];
    }

    setTile(x, y, tile) {
        if (x < 0 || x >= this.length || y < 0 || y >= this.length)
            return null;

        this.tiles[x + (y * this.width)] = tile;
    }

    getTiles(x1, y1, x2, y2) {
        let tiles = [];
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                if (x < 0 || x >= this.length || y < 0 || y >= this.length)
                    continue;

                tiles.push(this.getTile(x, y));
            }
        }

        return tiles;
    }

}