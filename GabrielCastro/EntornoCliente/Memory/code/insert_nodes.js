
function get_whites(x, y) {
	var game_div = document.createElement("div");
	var img = document.createElement("img");
	img.src = "../img/blanco.jpg";
	img.className = "img";
	var cell = create_node("div", img);
	cell.className = "cell";
	for (let i = 0; i < y; i++) {
		for (let j = 0; j < x; j++)
			game_div.appendChild(cell.cloneNode(true));
	}
	var imgs = game_div.getElementsByTagName("img");
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].id = i;
	}
	var game = document.getElementById("game");
	game_div.className = "grid";
	game.appendChild(game_div);
	return(game);
}
