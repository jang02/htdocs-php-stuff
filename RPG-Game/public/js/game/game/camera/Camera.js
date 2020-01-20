/**
 * Created by Nick on 20 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.smoothTransition = false;

        this.targetX = 0;
        this.targetY = 0;
    }

    moveToPlayer(player) {
        this.targetX = player.x;
        this.targetY = player.y;
    }

    moveToPosition(x, y) {
        this.targetX = x;
        this.targetY = y;
    }

    update(delta) {
        if (this.smoothTransition) {

        }
        else {
            this.x = this.targetX;
            this.y = this.targetY;
        }
    }
}