var tiles = [];
//var tring = false;
function init_game() {
	alert("hola");
	tiles = get_gameTiles(16);
	var game = get_whites(6, 4);
}

/* function flip(img) {
	img.src = tiles[];
}

function play(link) {
	if (!tring) {
		img = link.getElementsByTagName("img");
		flip(img);
		tring = true;
	}else {
	}
} */

const buttom = document.getElementById("init");
document.addEventListener("DOMContentLoaded",() => {
	buttom.addEventListener("click", init_game);
});
