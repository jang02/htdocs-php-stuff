/**
 * Created by Nick on 19 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

const WorldTerrain = {
    PLAINS: {
        id: 1,
        name: "Plains"
    },
    FOREST: {
        id: 2,
        name: "Forest"
    },
    ICE: {
        id: 3,
        name: "Ice"
    },
    DESERT: {
        id: 4,
        name: "Desert"
    },
    CAVE: {
        id: 5,
        name: "Cave"
    },
    BUILDING: {
        id: 6,
        name: "Building"
    },

    getFromId: function (id) {
        Object.keys(WorldTerrain).forEach(function (key, index, array) {
            if (!key.equalsIgnoreCase("getFromId")) {
                let value = WorldTerrain[key];

                if (value.id === id) {
                    return value;
                }
            }

        });
        return null;
    }
};