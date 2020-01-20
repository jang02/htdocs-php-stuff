const tiles = {};
const objectTypes = ["Walkable", "Wall"];
const tileSize = 32;

const level = document.getElementById("level");
const sidebar = document.getElementById("sidebar");
const objects = document.getElementById("objects");

let selectedTile = null;

function setupSidebar() {
    // world size
    {
        let worldsizeDiv = document.createElement("div");
        sidebar.append(worldsizeDiv);
        for (let i = 0; i < 2; i++) {
            let p = document.createElement("p");
            p.innerText = i === 0 ? "Length" : "Width";
            worldsizeDiv.appendChild(p);

            let input = document.createElement("input");
            input.type = "number";
            input.id = i === 0 ? "length" : "width";
            input.value = i === 0 ? "20" : "11";
            worldsizeDiv.appendChild(input);
        }

        let button = document.createElement("button");
        button.innerText = "Submit";
        button.style.display = "block";
        button.onclick = function () {
            level.innerHTML = "";

            let length = parseInt(document.getElementById("length").value);
            let width = parseInt(document.getElementById("width").value);

            level.style.width = ((length) * tileSize) + "px";
            level.style.height = ((width) * tileSize) + "px";

            for (let x = 0; x < length; x++) {
                for (let y = 0; y < width; y++) {
                    let div = document.createElement("div");
                    div.id = "x" + x + "_y" + y;
                    div.style.width = (tileSize) + "px";
                    div.style.height = (tileSize) + "px";
                    div.className = "";
                    level.append(div);

                    div.onclick = function () {
                        if (selectedTile == null) {
                            div.className = "";
                            div.style.backgroundImage = "";
                        }
                        else {

                            if (!document.getElementById(div.id).classList.contains(selectedTile.name)) {
                                div.classList.add(selectedTile.name);

                                //div.style.backgroundImage = "url(\"" + selectedTile.src + "\")";
                                if (div.style.backgroundImage.length > 0) {
                                    div.style.backgroundImage = "url(\"" + selectedTile.src + "\"), " + div.style.backgroundImage;
                                }
                                else {
                                    div.style.backgroundImage = "url(\"" + selectedTile.src + "\")";
                                }//*/
                            }
                        }

                    };
                }
            }
        };
        button.onclick();

        worldsizeDiv.appendChild(button);
    }

    // add object
    {
        let objectDiv = document.createElement("div");
        sidebar.append(objectDiv);

        let file = document.createElement("input");
        file.type = "file";
        file.id = "file";

        let type = document.createElement("select");
        type.id = "select";

        objectTypes.forEach(function (value, index, array) {
            let option = document.createElement("option");
            option.value = index + 1;
            option.innerText = value;
            type.appendChild(option);
        });

        let p = document.createElement("p");
        p.innerText = "Optional arguments";

        let args = document.createElement("input");
        args.type = "text";
        args.id = "args";

        file.style.display = "block";
        type.style.display = "block";
        args.style.display = "block";

        let button = document.createElement("button");
        button.innerText = "Submit";
        button.style.display = "block";
        button.onclick = function () {
            var x = document.getElementById("file");

            if ('files' in x) {
                if (x.files.length === 1) {
                    let file = x.files[0];

                    let name = file.name;

                    let typeBox = document.getElementById("select");
                    let type = parseInt(typeBox.options[typeBox.selectedIndex].value);

                    let args = document.getElementById("args").value;

                    let image = document.createElement("img");
                    image.alt = name;
                    image.id = name;
                    image.classList.add("object");

                    objects.appendChild(image);
                    previewImage(image.id);

                    let data = {
                        name: name.replaceAll(" ", "").replaceAll("-", ""),
                        src: image.src,
                        type: type,
                        args: args
                    };

                    tiles[name] = data;


                    image.onclick = function() {
                        deselect();
                        selectedTile = data;

                        image.style.outline = "1px solid black";
                        image.classList.add("selected");
                    };

                    setTimeout(function () {
                    }, 50);
                }
            }
        };

        objectDiv.appendChild(file);
        objectDiv.appendChild(type);
        objectDiv.appendChild(p);
        objectDiv.appendChild(args);
        objectDiv.appendChild(button);
    }

    // export
    {
        let exportDiv = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = "Map name";
        exportDiv.appendChild(p);

        let input = document.createElement("input");
        input.type = "text";
        input.id = "map_name";
        input.value = "First room";
        exportDiv.appendChild(input);


        p = document.createElement("p");
        p.innerText = "Export name (json file)";
        exportDiv.appendChild(p);

        input = document.createElement("input");
        input.type = "text";
        input.id = "export_name";
        input.value = "room_1";
        exportDiv.appendChild(input);

        p = document.createElement("p");
        p.innerText = "World type";
        exportDiv.appendChild(p);

        let type = document.createElement("select");
        type.id = "map_type";

        ["Plains", "Forest", "Ice", "Desert", "Cave", "Building"].forEach(function (value, index, array) {
            let option = document.createElement("option");
            option.value = index + 1;
            option.innerText = value;
            type.appendChild(option);
        });

        exportDiv.appendChild(type);

        let button = document.createElement("button");
        button.innerText = "Export";
        button.style.display = "block";
        button.onclick = function () {
            let a = document.createElement("a");
            a.style.display = "none";
            document.body.appendChild(a);

            let data = {};

            let typeBox = document.getElementById("map_type");
            data.name = document.getElementById("map_name").value;
            data.terrain = parseInt(typeBox.options[typeBox.selectedIndex].value);


            data.length = parseInt(document.getElementById("length").value);
            data.width = parseInt(document.getElementById("width").value);

            let tileData = [];

            for (let i = 0; i < level.children.length; i++) {
                let element = level.children[i];

                let overlayData = [];

                Object.keys(tiles).forEach(function (key, index, array) {
                    let value = tiles[key];

                    if (element.classList.contains(value.name)) {
                        let tile = [
                            element.id.split("_")[0].replace("x", ""),      // X coordinate
                            element.id.split("_")[1].replace("y", ""),      // Y coordinate
                            key,                                            // Image source name
                            value.type,                                     // Collision type
                            value.args                                      // Optional arguments
                        ];

                        if (containsArg(value, "overlay")) {
                            overlayData.push(tile);
                        }
                        else {
                            tileData.push(tile);
                        }

                    }
                });

                overlayData.sort(function (a, b) {
                    let aValue = parseInt(getArgumentValue(a[a.length - 1], "overlay"));
                    let bValue = parseInt(getArgumentValue(b[b.length - 1], "overlay"));

                    return aValue - bValue;
                });

                overlayData.forEach(function (value, index, array) {
                    tileData.push(value);
                });
            }

            data.tiles = tileData;

            let json = JSON.stringify(data);
            let blob = new Blob([json], {type: "octet/stream"});
            let url = window.URL.createObjectURL(blob);

            a.href = url;
            a.download = document.getElementById("export_name").value + ".json";
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        };

        exportDiv.appendChild(button);
        sidebar.appendChild(exportDiv);
    }
}

function setupLevel() {

}

function setupObjects() {

}

setupSidebar();
setupLevel();
setupObjects();

function deselect() {
    selectedTile = null;

    let elements = document.getElementsByClassName("object");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        if (element.classList.contains("selected")) {
            element.style.outline = null;
            element.classList.remove("selected");
        }
    }
}

function containsArg(tile, argument) {
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
}

function getArgumentValue(input, argument) {
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
}

function previewImage(element) {
    var preview = document.getElementById(element); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here

    preview.src = URL.createObjectURL(file);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};