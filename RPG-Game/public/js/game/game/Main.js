/**
 * Created by Nick on 17 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

let Main = function (parentPath, divParent, canvas) {
    let self = this;
    let local = {};

    self.parentPath = parentPath;
    self.divParent = divParent;
    self.canvas = canvas;

    self.utils = new Utils(this);

    self.canvas.width = Global.WIDTH;
    self.canvas.height = Global.HEIGHT;

    self.resourceHandler = new ResourceHandler(this);

    self.screen = new GameScreen(this, self.handler = new GameHandler(this));
    self.renderManager = new RenderManager(this);

    self.worldManager = new WorldManager(this, function (worlds) {
        self.handler.world = worlds.test_room;
    });


};