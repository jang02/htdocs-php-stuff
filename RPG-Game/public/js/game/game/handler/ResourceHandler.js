/**
 * Created by Nick on 20 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

let ResourceHandler = function (game) {
    let self = this;
    let local = {};

    local.resourcesIndex = {};

    local.types = {
        IMAGE: function (fileName) {
            let internalName = ("" + (fileName.includes("/") ? fileName.split("/")[fileName.split("/").length - 1] : fileName)).split(".")[0];

            let image = new Image();
            image.src = game.utils.getResource("images/" + fileName);


            image.addEventListener('load', function() {
                local.resourcesIndex[internalName] = image;

                console.log("internal name = " + internalName);
                console.log("resources index = " + JSON.stringify(local.resourcesIndex));
                console.log("object 1 = " + local.resourcesIndex[internalName]);
            }, false);
        },
    };

    game.utils.requestPhpResponse("ReadFiles", {directory: "../resources/images"}, function (response) {
        response = JSON.parse(response);

        for (let i = 0; i < response.length; i++) {
            let fileName = "" + response[i];

            if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".png")) {
                local.types.IMAGE(fileName);
            }
        }

        //this.onLoad();
    }, game.utils.getToken());

    self.getResource = function (name) {
        return local.resourcesIndex[name];
    };

    self.getImages = function () {
        return JSON.stringify(local.resourcesIndex);
    };
};