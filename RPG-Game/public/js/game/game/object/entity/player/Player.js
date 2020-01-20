/**
 * Created by Nick on 17 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

class Player extends Entity {
    constructor() {
        super();

        this.exp = 0;
        this.totalExp = 0;
    }

    levelUp() {
        this.exp -= this.getExpNeeded(this.level + 1);
        this.level++;
    }

    getExpNeeded(level) {

        return 0;
    }

    giveExp(exp) {
        this.exp += exp;
        this.totalExp += exp;
        while (this.exp > this.getExpNeeded(this.level + 1)) {
            this.levelUp();
        }
    }
}