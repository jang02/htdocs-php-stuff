function reset() {
	document.getElementById('game').innerHTML = "";
	console.log('reset screen.');
	document.getElementById('rank').innerHTML= currentrank.name;
	resetButtons();
}

function startscreen() {
	document.getElementById("game").style.backgroundImage = 'url(pictures/startscreen.jpg)';

	var start = document.createElement('BUTTON');
	start.id = "startbutton";
	start.classList.add('customButton');
	document.getElementById("buttons").appendChild(start);
	console.log('made startbutton');

	document.getElementById('startbutton').innerHTML = 'Start';
	document.getElementById('startbutton').onclick = farm;
}

function farm() {
	reset();
	document.getElementById("game").style.backgroundImage = 'url(pictures/farm.jpg)';
	buttonloader("flex","flex","none");
	
	if (!inventory["scythe"]) {	
		create_scythe();
		document.getElementById('scythe').onclick = click_scythe;
	}

	if (dialogues["dialogue1"]) {
		dialogue2();
	}
	else {
		dialogue1();
	}

	createSecretDoor();
	document.getElementById("SecretDoor").onclick = SecretInside;

	buttonleft.onclick = castleforest;
	buttonright.onclick = levelwar;
}

function levelwar() {
	if (currentrank.id <= 1) {
		alert("You have to be atleast a Knight to go this way!");
		farm();
		console.log('sent back to the farm')
	}
	else{
		reset();
		document.getElementById("game").style.backgroundImage = 'url(pictures/desert.png)';
		if (!dialogues["towar"]){
			dialogue10();
		}
		else{
			dialogue14();
		}
		
		backbutton.onclick = farm;
		buttonright.onclick = war;
		buttonloader("none","flex","flex");
	}

}

function war() {
	reset();
	document.getElementById("game").style.backgroundImage = 'url(pictures/war.jpg)';
	backbutton.onclick = levelwar;
	buttonloader("none","none","flex");

	emptydialogue();

	if (currentrank.id <= 2) {
		var defensive = document.createElement('BUTTON');
		defensive.id = "defend";
		document.getElementById("buttons").appendChild(defensive);
		console.log('made startbutton');
		defensive.classList.add('customButton');

		document.getElementById('defend').innerHTML = 'Fight Defensive';
		document.getElementById('defend').onclick = dialogue11;

		var aggro = document.createElement('BUTTON');
		aggro.id = "aggro";
		document.getElementById("buttons").appendChild(aggro);
		console.log('made startbutton');
		aggro.classList.add('customButton');

		document.getElementById('aggro').innerHTML = 'Charge in';
		document.getElementById('aggro').onclick = dialogue12;

		document.getElementById('aggro').style.display = "flex";
		document.getElementById('defend').style.display = "flex";		
	}

	if(dialogues["warover"]){
		warover();
	}
}

function SecretInside() {
	reset();
	document.getElementById("game").style.backgroundImage = 'url(pictures/secretinside.jpg)';

	if (!enemies["nick"]) {
		createNick();

		// load battle scripts
        var scripts = [
            "easter_egg/code/Battle.js",
            "easter_egg/code/Boss.js",
            "easter_egg/code/enemy.js",
            "easter_egg/code/utils.js",

            "easter_egg/code/bullet/bullet.js",
        ];

        document.head.innerHTML += "<link rel=\"stylesheet\" type=\"text/css\" href=\"easter_egg/code/battle.css\">";

        for (let i = 0; i < scripts.length; i++) {
            let scriptSrc = scripts[i];

            let script = document.createElement('script');
            script.src = scriptSrc;
            document.body.appendChild(script);
        }

		document.getElementById("Nick").onclick = function () {
			startBattle();
        };
	}
	buttonloader("none","none","flex");
	backbutton.style.display = "flex";
	backbutton.onclick = farm;
	
	secretdialogue();
}

function castleforest() {
	reset();
	document.getElementById('game').style.backgroundImage = 'url(pictures/castle.jpg)';
	backbutton.onclick = farm;
	buttonleft.onclick = castleinside;
	buttonright.onclick = forest;
	buttonloader("flex","flex","flex");

	if (dialogues["dialogue3"]) {
		dialogue4();
	}
	else {
		dialogue3();
	}

}

function castleinside() {
	if (currentrank.id === 0) {
		alert("You have to be atleast a Merchant to enter the castle!");
		castleforest();
		console.log('sent back to castle forest')
	}
	else {
		reset();
		document.getElementById('game').style.backgroundImage = 'url(pictures/inside_castle.jpg)';
		backbutton.onclick = castleforest;
		buttonleft.onclick = castleplaza;

		buttonloader("flex","none","flex");

		if (dialogues["dialogue3"]) {
			dialogue5();
		}
		else {
			dialogue6();
		}
	}
}

function castleplaza() {
	reset();

	document.getElementById('game').style.backgroundImage = 'url(pictures/castleplaza.jpg)';
	backbutton.onclick = castleinside;
	buttonleft.onclick = throneroom;

	buttonloader("flex","none","flex");

	if (!dialogues['kingdialogue']) {
		var king = document.createElement('BUTTON');
		king.id = "kingdialogue";
		king.classList.add('customButton');
		document.getElementById("buttons").appendChild(king);
		document.getElementById('kingdialogue').innerHTML = 'Put bear head for sale.';
		document.getElementById('kingdialogue').onclick = kingdialogue;
		document.getElementById('kingdialogue').style.display = "flex";
	}
	
	if(!dialogues["market"]){
		dialogue9();
	}
	else{
		dialoguemarket();
	}

}

function forest() {
	reset();
	document.getElementById('game').style.backgroundImage = 'url(pictures/forest.jpg)';
	backbutton.onclick = castleforest;
	buttonloader("none","none","flex");
	
	if (!enemies["bear"]){
		create_bear();
		document.getElementById("bear").onclick = attack_enemy1;
	}

	if (!enemies["bear"]){
		dialogue7();	
	}
	else {
		dialogue8();

	}
}

function death() {
	reset();
	document.getElementById("game").style.backgroundColor = "black";
	document.getElementById("game").style.backgroundImage = "none";

	var deathmessage = document.createElement('H1');
	deathmessage.id = "death";
	deathmessage.style.fontSize = "100px";
	document.getElementById("game").appendChild(deathmessage)
	document.getElementById("death").innerHTML = "You died";

	backbutton.onclick = reload;
	backbutton.innerHTML = "Restart";
}

function throneroom() {
	if (currentrank.id <= 2){
		alert('You have to be the King in order to go here.');
		castleplaza();
	}
	else{
		reset();
		backbutton.onclick = castleplaza;
		buttonloader("none","none","flex")
		document.getElementById('game').style.backgroundImage = 'url(pictures/throneroom.jpg)';	
		dialogue13();

		if(!inventory["crown"]) {
			createcrown();
		}
		
		createcredits();
		document.getElementById('credits').style.display = "flex";
	}
}

startscreen();




// DONT LOOK AT THIS

function playCredits() {
	document.getElementById('credits').style.display = "none";
	buttonloader("none","none","flex");

	backbutton.onclick = reload;
	backbutton.innerHTML = "Restart";

    document.getElementById("game").style.backgroundImage = "url(easter_egg/images/victory.png)";

    document.getElementById("menu").style.zIndex = "99";
    document.getElementById("dialogues").style.zIndex = "99";
    document.getElementById("inventory").style.zIndex = "99";


    // fontsize:50%text = font size van 50
    // "\\" = kleine witregel

    let creditsText = [
        "fontsize:120%CREDITS", // h1
        "",
        "",
        "",
        "fontsize:80%Adventure Game", // h2
        "",
        "Made by Jan Garretsen",
        "fontsize:25%\u00A9<i> EpicGodLight</i>",
        "fontsize:25%<i>This game was made for a school project.</i>",
        "\\",
        "fontsize:30%<i>Credits to ImSpooks for the easter egg + credits screen</i>",
        "",
        "",
        "Note: I do not own any images/audio",
        "in this game.",
        "",
        "fontsize:80%Music", // h2
        "fontsize:25%<i>All of the music used in this game are</i>",
        "fontsize:25%<i>made by Toby Fox for his game Undertale</i>",
        "",
        "",
        "Credits: Last Goodbye by Toby Fox",
        "",
        "",
        "fontsize:58%Boss Fights", // h3
        "",
        "",
        "Flowey Fight: Your Best Friend by Toby Fox",
        "\\",
        "Bear Fight: Bonetrousle by Toby Fox",
        "\\",
        "Golem Fight: Bergentrückung",
        "       & ASGORE by Toby Fox",
        "\\",
        "Wizard Fight: Heart Ache by Toby Fox",
        "\\",
        "Giant Hawk Fight: Hopes and Dreams",
        "       & SAVE the World by Toby Fox",
        "\\",
        "",
        "",
        "",
        "fontsize:58%Overworld", // h3
        "",
        "",
        "Title Screen: Undertale by Toby Fox",
        "\\",
        "Forest Area: Snowy by Toby Fox",
        "\\",
        "Village Area: Temmie Village by Toby Fox",
        "",
        "",
        "",
        "",
        "fontsize:80%Beta Testers", // h2
        "",
        "",
        "KantSjaak",
        "\\",
        "Shadow",
        "\\",
        "EnergeticShadow",
        "\\",
        "Eyeminer",
        "\\",
        "Mr. Fontijn",
        "\\",
        "EpicGodLight",
        "",
        "",
        "",
        "fontsize:80%Special Thanks", // h2
        "",
        "Toby Fox, creator of Undertale & Deltarune",
        "   Because of him, I had the idea to recreate the battle mechanics",
        "",
        "",
        "",
        "My friends, for making ideas and testing",
        "",
        "",
        "And...",
        "... YOU, for playing this game :)",

        //empty lines so the last line will stay at a certain position
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "fontsize:80%Thanks for playing!", // h1
        //empty lines so the last line will stay at a certain position
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ];

    let message = 0;

    let frameCount = 30;
    let pixelsPerFrame = 1;

    let intervals = [];

    let displayText = function (input){
        let element = document.createElement("p");

        let text = input;
        let fontSize = 35;

        if (input.includes("%")) {
            fontSize = parseInt(input.split("%")[0].replace("fontsize:", ""));

            text = input.split("%")[1];
        }

        if (input === "\\") {
            text = "";
            fontSize = 10 - 3;
        }


        let lineHeight = fontSize + 3;

        element.style.textAlign = "left";
        element.style.fontSize = fontSize + "px";
        element.style.lineHeight = lineHeight + "px";
        element.style.fontFamily = "Determination Mono, Lato, sans-serif";
        element.style.textShadow = "none";
        element.innerHTML = text;

        element.style.position = "absolute";
        //element.style.left = (screenPosition.x + (640 - getTextWidth(text, fontSize, "Determination Mono")) - fontSize) + "px";
        element.style.top = (screenPosition.y + 750) + "px";

        element.style.left = "50%";
        element.style.transform = "translateX(-50%)";
        element.style.msTransform = "translateX(-50%)";
        element.style.color = "white";

        let interval = setInterval(function () {
            if (element == null || message >= creditsText.length) {
                clearInterval(interval);
            }
            else {
                let currentTop = parseInt(element.style.top.replace("px", ""));

                if (currentTop < 0 - lineHeight) {
                    element.remove();
                    element = null;
                }
                else {
                    currentTop = currentTop - pixelsPerFrame;

                    element.style.top = currentTop + "px";
                }
            }

        }, 1000 / frameCount);

        intervals.push(interval);

        document.getElementById("game").appendChild(element);

        return lineHeight;
    };

    new Audio("easter_egg/audio/victory.ogg").play();

    let waitFrames = 0;

    let textInterval = setInterval(function () {
        if (waitFrames-- <= 0) {
            if (message >= creditsText.length) {
                clearInterval(textInterval);

                for (let id in intervals) {
                    clearInterval(id);
                }
            }
            else {
                waitFrames = displayText(creditsText[message++]);
            }
        }

    }, 1000 / frameCount);
}