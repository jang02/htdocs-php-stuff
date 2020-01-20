var word = words[Math.floor(Math.random() * words.length)];
var letterArray = [];
var guessedArray = ["","","","",""];
var correctArray = ["","","","",""];
var maxGuesses = 5;
var guess = 1;
var win = false;

function creategame(){
	var container1 = document.createElement('DIV');
	var container2 = document.createElement('DIV');

	container1.id = "gamecontainer";
	container2.id = "inputcontainer";

	document.body.appendChild(container2);
	document.body.appendChild(container1);

	var input = document.createElement("INPUT");
	input.id = "input";
	input.type = "text";

	var button = document.createElement("BUTTON");
	button.id = "check";
	button.onclick = check;
	button.innerHTML = "Check";

	document.getElementById("inputcontainer").appendChild(input);
	document.getElementById("inputcontainer").appendChild(button);

	for (let i = 1; i <= maxGuesses; i++){
		var row = document.createElement("DIV");
		row.id = "row" + i;
		document.getElementById("gamecontainer").appendChild(row);
		for (var j = 1; j <= 5; j++){
			var block = document.createElement("DIV");
			block.id = i + "-" + j;
			block.classList.add("playboard");
			document.getElementById("row" + i).appendChild(block);

			var p = document.createElement("P");
			p.id = "row" + i + "-" + "col" + j;
			document.getElementById(i + "-" + j).appendChild(p);
		}
	}
	console.log("The word word is: " + word);

	for (let i = 0; i < word.length; i++){
		letterArray.push(word.charAt(i));
	}
	document.getElementById("row1-col1").innerHTML = letterArray[0];
}

function check() {
	if (!win) {
		guessedArray = ["","","","",""];
		console.log(document.getElementById("input").value);
		var guessedword = document.getElementById("input").value.toLowerCase();
		for (let i = 0; i < guessedword.length; i++) {
			guessedArray[i] = guessedword.charAt(i);
		}

        // cloned de array
        var clonedArray = letterArray.slice(0);

        // checkt op goede letter
        for (let i = 0; i < clonedArray.length; i++) {
            document.getElementById("row" + guess + "-col" + (i + 1)).innerHTML = guessedArray[i];

            if (guessedword[i] === clonedArray[i]) {
                document.getElementById(guess + "-" + (i + 1)).classList.add("green");
                correctArray[i] = guessedArray[i];
                clonedArray[i] = "";
            }
        }

        // checkt op letter op andere plaats
        for (let i = 0; i < clonedArray.length; i++) {
            if (clonedArray.indexOf(guessedword[i]) !== -1) {
                if (document.getElementById(guess + "-" + (i + 1)).classList.contains("green"))
                    continue;

                document.getElementById(guess + "-" + (i + 1)).classList.add("yellow");

                clonedArray[clonedArray.indexOf(guessedword[i])] = "";
            }
        }

		guess++;
		if (guessedword === word) {
			win = true;
			alert("Je hebt gewonnen!");

            var button = document.createElement("BUTTON");
            button.id = "restart";
            button.onclick = reload;
            button.innerHTML = "Restart";

            document.getElementById('gamecontainer').appendChild(button);
		}
		else if (guess > 5) {
			alert('Je hebt verloren');
			reset();

			var button = document.createElement("BUTTON");
			button.id = "restart";
			button.onclick = reload;
			button.innerHTML = "Restart";

			document.getElementById('gamecontainer').appendChild(button);

            for (let i = 1; i <= 1; i++){
                var row = document.createElement("DIV");
                row.id = "row" + i;
                document.getElementById("gamecontainer").appendChild(row);
                for (var o = 1; o <= 5; o++){
                    var block = document.createElement("DIV");
                    block.id = i + "-" + o;
                    block.style.backgroundColor = 'green';
                    block.classList.add("playboard");
                    document.getElementById("row" + i).appendChild(block);

                    var p = document.createElement("P");
                    p.id = "row" + i + "-" + "col" + o;
                    document.getElementById(i + "-" + o).appendChild(p);
                }
            }

            for (var i = 0; i < 5; i++) {
            	document.getElementById('row1-col' + (i + 1)).innerHTML = letterArray[i];
			}
		}
		else {
			var k = 0;
			for (var j = 1; j <= maxGuesses; j++){
				document.getElementById("row" + guess + "-col" + j).innerHTML = correctArray[k];
				k++;
			}
		}
	}
	else {
		alert("Je hebt al gewonnen");
	}
    document.getElementById("input").value = "";
}

function reload() {
    window.location.reload(false);
}

function reset() {
	document.getElementById('gamecontainer').innerHTML = "";
	document.getElementById('inputcontainer').innerHTML = "";
	console.log('reset gamecontainer.');
}

document.addEventListener('keydown', function(event){
    if(event.keyCode === 13) {
    	check();
	}
} );

creategame();