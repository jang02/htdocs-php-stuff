/**
 * Created by Nick on 18 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

let Utils = function (game) {
    let local = {};
    let self = this;

    /**
     *  Open a php stream and get a response
     *
     * @param path The path of the php file
     * @param jsonData Post data
     * @param response Callback function of the response
     * @param token Token required to execute the request
     */
    self.requestPhpResponse = function(path, jsonData, response, token) {
        if (jsonData == null)
            jsonData = {};

        jsonData.token = token;

        $.post(this.getPhp(path), jsonData, function(phpResponse) {
            if (response != null)
                response(phpResponse);
        });
    };

    self.requestJson = function(path, response) {
        $.getJSON(this.getResource(path + (!path.endsWith(".json") ? ".json" : "")), function(jsonResponse) {
            if (response != null)
                response(jsonResponse);
        });
    };

    // get internal files

    /**
     * Get the full path of a script
     *
     * @param path The path of a script
     * @returns Full path to the specified script
     */
    self.getScript = function(path) {
        return game.parentPath + "game/" + path + (!path.endsWith(".js") ? ".js" : "");
    };

    /**
     * Get the full path of a script
     *
     * @param path The path of a resource
     * @returns Full path to the specified resource
     */
    self.getResource = function(path) {
        return game.parentPath + "resources/" + path;
    };

    /**
     * Get the full path of a php file
     *
     * @param path The path of a php file
     * @returns Full path to the specified php file
     */
    self.getPhp = function(path) {
        return game.parentPath + "php/" + path + (!path.endsWith(".php") ? ".php" : "");
    };


    // tile arguments

    self.containsArg = function(tile, argument) {
        argument = argument.toLowerCase();

        if (tile.args.includes(";")) {
            let split = tile.args.split(";");

            for (let i = 0; i < split.length; i++) {
                let str = split[i].toLowerCase();

                if (str.includes(":"))
                    str = str.split(":")[0];

                if (str === argument) {
                    return true;
                }
            }
        }
        else {
            return tile.args.toLowerCase() === argument;
        }
    };

    self.getArgumentValue = function(input, argument) {
        argument = argument.toLowerCase();

        if (input.includes(";")) {
            let split = input.split(";");

            for (let i = 0; i < split.length; i++) {
                let str = split[i];

                if (!str.includes(":"))
                    continue;

                if (str.split(":")[0].toLowerCase() !== argument)
                    continue;

                return str.split(":")[1];
            }
        }
        else {
            if (input.includes(":")) {
                if (input.split(":")[0].toLowerCase() === argument) {
                    return input.split(":")[1];
                }
            }
        }
        return null;
    };




    self.randomString = function(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    /**
     *
     * @returns Php token
     */
    self.getToken = function() {
        return local.token;
    };

    local.token = self.randomString(256);
    $.post(this.getPhp("RequestToken"), {token: local.token}, function(response) {});
};