var enemies = {"bear":false, "nick":false, }

function create_bear() {
	var img = document.createElement('IMG');
	img.src = 'pictures/enemy1.png';
	img.style.width = "250px";
	img.style.height = "250px";
	document.getElementById("game").appendChild(img);
	img.style.position = "absolute";
	img.style.top = (screenPosition.y + 360) + "px";
	img.style.left = (screenPosition.x + 1115) + "px";
	img.classList.add("ui");
	img.id = "bear";
	console.log('made bear');
}

function attack_enemy1() {
	if (inventory["scythe"]) {
		enemies["bear"] = true;
		document.getElementById("bear").style.display = "none";
		currentrank = Ranks.MERCHANT;
		beatbear();
	}
	else {
		death();
		beardeathdialogue();
	}
}

function createNick() {
	var img = document.createElement('IMG');
	img.src = 'pictures/nick.png';
	img.style.width = "200px";
	img.style.height = "200px";
	document.getElementById("game").appendChild(img);
	img.style.position = "absolute";
	img.style.top = (screenPosition.y + 100) + "px";
	img.style.left = (screenPosition.x + 650) + "px";
	img.classList.add("ui");
	img.id = "Nick";
	console.log('made nick');	
}

