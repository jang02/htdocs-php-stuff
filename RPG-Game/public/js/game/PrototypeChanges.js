/**
 * Created by Nick on 18 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

// String prototypes

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.format = function() {
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof arguments[number] !== 'undefined' ? arguments[number] : match;
    });
};

String.prototype.equalsIgnoreCase = function(match) {
    return this.toLowerCase() === match.toLowerCase();
};

String.prototype.toArray = function() {
    return JSON.parse(this);
};

// Number prototypes

Number.prototype.round = function (places) {
    return this.toFixed(places);
};

document.getElementById("prototypeChanges").remove();