/**
 * Created by Nick on 20 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

var WorldManager = function (game, onLoad) {
    let self = this;

    self.worlds = {};

    game.utils.requestPhpResponse("ReadFiles", {directory: "../resources/worlds"}, function (response) {
        response = JSON.parse(response);

        for (let i = 0; i < response.length; i++) {
            let fileName = "" + response[i];

            game.utils.requestJson("worlds/" + fileName, function (json) {
                let internalName = ("" + (fileName.includes("/") ? fileName.split("/")[fileName.split("/").length - 1] : fileName)).replaceAll(".json", "");

                let name = json.name;
                let terrain = WorldTerrain.getFromId(json.terrain);
                let length = json.length;
                let width = json.width;
                let tiles = json.tiles;

                self.worlds[internalName] = new World(game, self.worlds.length, name, terrain, length, width, tiles);

                if (fileName === response[response.length - 1]) {
                    onLoad(self.worlds);
                }
            });
        }

        //this.onLoad();
    }, game.utils.getToken());
};