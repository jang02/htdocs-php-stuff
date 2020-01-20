/**
 * Created by Nick on 20 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

class GameScreen extends AbstractScreen {
    constructor(game, handler) {
        super(game, handler);
    }

    update(delta) {
        this.handler.update(this, delta);
    }

    render(graphics) {
        this.handler.render(this, graphics);
    }

    preLoad() {
        this.camera = new Camera();
    }
}