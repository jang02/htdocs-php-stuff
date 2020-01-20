var dialogues = {"introduction":false, "dialogue1":false, "dialogue3":false, "dialogue5":false, "kingdialogue":false, "market":false, "towar":false, "warover":false}

var skipdialog = 1;

function introduction() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome player!";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "Before you click start, I'd like to give a short introduction.";}, 2500);
	setTimeout(function() {document.getElementById('text').innerHTML= "In this game, your goal is to become king of this little country, of course you'll start out as a peasant farmer.";}, 7500);
	setTimeout(function() {document.getElementById('text').innerHTML= "There's going to be a few things you can collect in order to advance to a higher rank. And a few tasks that come with those items.";}, 13000);
	setTimeout(function() {document.getElementById('text').innerHTML= "Well thats all from me! Have fun while trying to finish this game! Oh, and make sure not to die :-)";}, 19500);
	setTimeout(function() {document.getElementById('text').innerHTML= "";}, 22500);
	dialogues["introduction"] = true;

	setTimeout(function() {document.getElementById("startbutton").style.display = 'flex';}, (22500 * skipdialog));
}

function beardeathdialogue() {
	var beardeath = document.createElement('H1');
	beardeath.id = "deathdialogue";
	beardeath.style.fontSize = "45px";
	document.getElementById("game").appendChild(beardeath)
	document.getElementById("deathdialogue").innerHTML = "Try finding some sort of weapon to defeat the bear with...";

}

function beatbeardialogue() {
	buttons.style.display = 'none';
	setTimeout(function() {document.getElementById('text').innerHTML= "You defeated the bear!";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "And thus the kingdom rewards you with a promotion";}, 3000);
	setTimeout(function() {document.getElementById('text').innerHTML= "You are now a <b>Merchant<b>!";}, 6000);

	setTimeout(function() {buttons.style.display = 'flex';}, (6000 * skipdialog));
}

function secretdialogue() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Whats this!?";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "You just found one of my many many secrets.";}, 3000);
	setTimeout(function() {document.getElementById('text').innerHTML= "And no, I won't tell you how many I have hidden in this game :)";}, 6500);

	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (6000 * skipdialog));
}

function dialogue1() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Hey and welcome to your farm!";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "Theres not really much you can do here, you should try to explore :-)";}, 3000);
	dialogues["dialogue1"] = true;

	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (3000 * skipdialog));
}

function dialogue2() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome back to your farm!";}, 1);
}

function dialogue3() {
	setTimeout(function() {document.getElementById('text').innerHTML= "This is the forest near the castle.";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "There could be danger lurking around here..";}, 3000);
	dialogues["dialogue3"] = true;

	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (3000 * skipdialog));
}

function dialogue4() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome back to the danger forest.";}, 1);
}

function dialogue5() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome inside the castle!";}, 1);
	dialogues["dialogue5"] = true;
}

function dialogue6() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome back to the castle plaza";}, 1);
}

function dialogue7() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Oh noo, a bear!";}, 1);
}

function dialogue8() {
	setTimeout(function() {document.getElementById('text').innerHTML= "You already defeated the bear.";}, 1);
}

function dialogue9() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome to the market.";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "Here you can sell your items if you happen to have any.";}, 3000);
	dialogues["market"] = true;

	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (3000 * skipdialog));
}

function dialoguemarket() {
	setTimeout(function() {document.getElementById('text').innerHTML= "Welcome back to the market.";}, 1);	
}

function kingdialogue() {
	setTimeout(function() {document.getElementById('text').innerHTML= "<b>King</b>: What's this?";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "<b>King</b>: Have you defeated this bear yourself young merchant?";}, 3000);
	setTimeout(function() {document.getElementById('text').innerHTML= "<b>You</b>: Yes sir, I defeated this bear.";}, 7000);
	setTimeout(function() {document.getElementById('text').innerHTML= "<b>King</b>: Hmm, what do you say? Do you want to join my army as a knight?";}, 10500);
	setTimeout(function() {document.getElementById('text').innerHTML= "<b>You</b>: But ofcourse sir! I'd love to.";}, 15000);
	setTimeout(function() {document.getElementById('text').innerHTML= "<b>King</b>: Then it's settled, here take this sword and assist me in the war.";}, 18000);
	setTimeout(function() {document.getElementById('text').innerHTML= "You are now a <b>Knight<b>!";}, 22500);
	setTimeout(function() {createsword();}, 18000);

	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (22500 * skipdialog));
	document.getElementById("kingdialogue").style.display = 'none';
	dialogues['kingdialogue'] = true;

	currentrank = Ranks.KNIGHT;
}

function dialogue10() {
	setTimeout(function() {document.getElementById('text').innerHTML= "You were asked to come help with fighting the neighbouring country.";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "You obviously didn't have a choice and came to help the fight, you are still on your way there.";}, 4000);
	dialogues["towar"] = true;
	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (4000 * skipdialog));	 
}

function dialogue11() {
	setTimeout(function() {document.getElementById('text').innerHTML= "You are now in the middle of the war, as you are fighting you hear someone scream";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "Our king is dead! Our king is dead!! Retreat!!";}, 4000);
	setTimeout(function() {document.getElementById('text').innerHTML= "You are now the <b>King<b>!";}, 7500);
	dialogues["warover"] = true;
	document.getElementById('aggro').style.display = "none";
	document.getElementById('defend').style.display = "none";
	buttons.style.display = 'none';
	setTimeout(function() {buttons.style.display = 'flex';}, (7500 * skipdialog));
	currentrank = Ranks.KING
}

function dialogue12() {
	setTimeout(function() {document.getElementById('text').innerHTML= "As you charge in, you get shot by an archer in the heart.";}, 4000);	

	document.getElementById('aggro').style.display = "none";
	document.getElementById('defend').style.display = "none";
	death();
	var wardeath = document.createElement('H1');
	wardeath.id = "deathdialogue";
	wardeath.style.fontSize = "45px";
	document.getElementById("game").appendChild(wardeath)
	document.getElementById("deathdialogue").innerHTML = "Maybe you should try to play a little more defensive...";

}
function dialogue13() {
	setTimeout(function() {document.getElementById('text').innerHTML= "After the king was killed in battle, you were chosen to be the next king.";}, 1);
	setTimeout(function() {document.getElementById('text').innerHTML= "Now that you are the king, you have officially finished my game. Thanks for playing!";}, 4500);
	setTimeout(function() {document.getElementById('text').innerHTML= "Also I hid one secret in this game, good luck finding it!";}, 9000);
}

function dialogue14() {
	setTimeout(function() {document.getElementById('text').innerHTML= "You are now on your way back to your country.";}, 1);	
}

function emptydialogue() {
	setTimeout(function() {document.getElementById('text').innerHTML= "";}, 1);
}

function warover() {
	setTimeout(function() {document.getElementById('text').innerHTML= "The war is already over, you can return Andreklussen safely now.";}, 1);
}
introduction();