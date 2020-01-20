/**
 * Created by Nick on 19 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

const TileTypes = {
    WALKABLE: {
        id: 1,
        name: "Walkable"
    },
    WALL: {
        id: 2,
        name: "Wall"
    },

    getFromId: function (id) {
        Object.keys(TileTypes).forEach(function (key, index, array) {
            if (!key.equalsIgnoreCase("getFromId")) {
                let value = TileTypes[key];

                if (value.id === id) {
                    return value;
                }
            }

        });
        return null;
    }
};