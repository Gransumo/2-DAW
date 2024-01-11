var tiles = [];
var tring = false;
var fliped;
var block = false;
var puntaje = 0;
var intentos = 0;
const blank_src = "../img/blanco.jpg";

function set_onClick(array, value) {
	for (let i = 0; i < array.length; i++) {
		array[i].addEventListener("click", value);
	}
}


function init_game() {
	tiles = get_gameTiles(8);
	var game = get_whites(4, 4);
	const cells = game.querySelectorAll("img");
	set_onClick(cells, play);
}

function flip(img) {
	if ((new URL(img.src)).pathname === blank_src)
		img.src = tiles[parseInt(img.id)].img_src;
	else 
		img.src = "../img/blanco.jpg";
}

function init_attempt(event) {
	return (new Promise((resolve) => {
		setTimeout(function() {
			flip(fliped);
			tiles[parseInt(fliped.id)].flip();
			flip(event.target);
			tiles[parseInt(event.target.id)].flip();
			resolve();
		}, 1000)
	}));
}

function verify_win(puntaje){
	if (puntaje === 8) {
		game_div = document.getElementById("game");
		game_div.appendChild(create_node("h1", "Ganaste"));
	}
}

function play(event) {
	if (tiles[parseInt(event.target.id)].fliped === true || block)
		return;
	if (!tring) {
		flip(event.target);
		tiles[parseInt(event.target.id)].flip();
		fliped = event.target;
		tring = true;
	}else {
		flip(event.target);
		tiles[parseInt(event.target.id)].flip();
		block = true;
		if (tiles[parseInt(event.target.id)].nombre === tiles[parseInt(fliped.id)].nombre) {
			puntaje++;
			block = false;
		}else {
			init_attempt(event).then(() => {
				intentos++;
				block = false;
			});
		}
		tring = false;
	}
	verify_win(puntaje);
}

function reset() {
	var game = document.getElementById("game");
	game.innerHTML = "";
	puntaje = 0;
	init_game();
}

document.addEventListener("DOMContentLoaded",() => {
	const buttom = document.getElementById("init");
	buttom.addEventListener("click", init_game);
	buttom.removeEventListener("click", init_game);
	buttom.addEventListener("click", reset);
});

