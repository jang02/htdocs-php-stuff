/**
 * Created by Nick on 17 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

// Global variables


// finalizing the product

function finalize() {
    let parentPath = document.getElementById("main").src.replace("Start.js", "");
    let divParent = document.getElementById("game");

    $.post(parentPath + "php/ReadFiles.php", {directory: "../game"}, function(response) {
        response = JSON.parse(response);


        for (let i = 0; i < response.length; i++) {
            let script = response[i].replaceAll(".js", "");

            console.log("script = " + script);

            addScript(parentPath, divParent, script, script);
        }


        // call the main class to start the game
        setTimeout(function () { new Main(parentPath, divParent, document.getElementById("canvas")); }, 1000);
    });

    /*$.post(parentPath + "php/ReadFiles.php", {directory: "../game"}, function(response) {
        response = JSON.parse(response);


        for (let i = 0; i < response.length; i++) {
            let script = response[i].replaceAll(".js", "");

            console.log("script = " + script);

            addScript(parentPath, divParent, script, script);
        }


        // call the main class to start the game
        setTimeout(function () { new Main(parentPath, divParent, document.getElementById("canvas")); }, 1000);
    });*/
}

// adding script files

function addScript(parentPath, divParent, path, id) {
    let script = document.createElement("script");
    script.src = parentPath + "game/" + path + ".js";
    script.id = id;
    divParent.appendChild(script);

    // removing them after a second
    setTimeout(function () {
        //script.remove();
    }, 1000);
}

finalize();

// adding the necessary script to function on boot

/*function addDefaultScripts() {
    let scripts = {
        Utils: "util/Utils",
    };
    Object.keys(scripts).forEach(function (value, index, array) {
        let script = scripts[value];

        addScript(script, value);
    });

    setTimeout(finalize, 100);
}//*/