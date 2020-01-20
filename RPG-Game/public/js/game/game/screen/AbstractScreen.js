/**
 * Created by Nick on 20 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

class AbstractScreen {
    constructor(game, handler) {
        this.game = game;
        this.handler = handler;
        this.camera = null;
        this.preLoad();
    }

    update(delta) {
        throw new Error("Method not implemented");
    }

    render(graphics) {
        throw new Error("Method not implemented");
    }

    preLoad() {
        throw new Error("Method not implemented");
    }
}