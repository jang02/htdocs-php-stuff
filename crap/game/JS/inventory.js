var inventory = {"scythe":false, "bearhead":false, "sword":false, "crown":false, };

function create_scythe() {
	var img = document.createElement('IMG');
	img.src = 'pictures/scythe.png';
	img.style.width = "60px";
	img.style.height = "75px";
	document.getElementById("game").appendChild(img);
	img.style.position = "absolute";
	img.style.top = (screenPosition.y + 360) + "px";
	img.style.left = (screenPosition.x + 1115) + "px";
	img.classList.add("ui");
	img.classList.add("blur");
	img.id = "scythe";
	console.log('made scythe');
}

function click_scythe() {
	inventory["scythe"] = true;
	document.getElementById('scythe').style.visibility = "hidden";
	console.log('clicked scythe');

	var img = document.createElement('IMG');
	img.src = 'pictures/scythe.png';
	img.style.width = "75px";
	img.style.height = "75px";
	document.getElementById("inventory").appendChild(img);
	img.classList.add("invitem");
}

function beatbear(){
	beatbeardialogue();

	inventory["bearhead"] = true;
 	var img = document.createElement('IMG');
	img.src = 'pictures/bearhead.png';
	img.style.width = "75px";
	img.style.height = "75px";
	document.getElementById("inventory").appendChild(img);
	img.classList.add("invitem");
	img.id = "bearhead";
}

function createsword(){
	inventory["sword"] = true;
 	var img = document.createElement('IMG');
	img.src = 'pictures/sword.png';
	img.style.width = "75px";
	img.style.height = "75px";
	document.getElementById("inventory").appendChild(img);
	img.classList.add("invitem");
	img.id = "sword";
}

function createcrown(){
	inventory["crown"] = true;
 	var img = document.createElement('IMG');
	img.src = 'pictures/crown.jpg';
	img.style.width = "75px";
	img.style.height = "75px";
	document.getElementById("inventory").appendChild(img);
	img.classList.add("invitem");
	img.id = "crown";
}