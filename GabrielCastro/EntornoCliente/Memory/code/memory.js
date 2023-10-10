var tiles = [];
var tring = false;
var fliped;
var puntaje = 0;
const blank_src = "/GabrielCastro/EntornoCliente/Memory/img/blanco.jpg";

function init_game() {
	tiles = get_gameTiles(16);
	var game = get_whites(4, 4);
	const cells = document.querySelectorAll("img");
	cells.forEach(function (img) {
		img.addEventListener("click", play);
	});
}

function flip(img) {
	if ((new URL(img.src)).pathname === blank_src){
		img.src = tiles[parseInt(img.id)].img_src;
	}
	else {
		img.src = "../img/blanco.jpg";
	}
}

function play(event) {
	if (tiles[parseInt(event.target.id)].fliped === false) {
		if (!tring) {
			flip(event.target);
			tiles[parseInt(event.target.id)].flip();
			fliped = event.target;
			tring = true;
		}else {
			flip(event.target);
			tiles[parseInt(event.target.id)].flip();
			if (tiles[parseInt(event.target.id)].nombre === tiles[parseInt(fliped.id)].nombre) {
				puntaje++;
			}else {
				setTimeout(function() {
					flip(fliped);
					tiles[parseInt(fliped.id)].flip();
					flip(event.target);
					tiles[parseInt(event.target.id)].flip();
				}, 1500)
			}
			tring = false;
		}
	}
}



document.addEventListener("DOMContentLoaded",() => {
	const buttom = document.getElementById("init");
	buttom.addEventListener("click", init_game);
});

