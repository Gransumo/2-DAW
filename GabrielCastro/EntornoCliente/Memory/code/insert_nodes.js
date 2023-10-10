
function get_whites(x, y) {
	var game_div = document.createElement("div");
	var img = document.createElement("img");
	img.src = "../img/blanco.jpg";
	var a_img = create_node("a", img);
	var cell = create_node("div", a_img);
	cell.className = "cell";
	for (let i = 0; i < y; i++) {
		for (let j = 0; j < x; j++)
			game_div.appendChild(cell.cloneNode(true));
	}
	var links = game_div.getElementsByTagName("a");
	for (let i = 0; i < links.length; i++) {
		links[i].id = i;
		links[i].onclick = "play(this)";
	}
	var game = document.getElementById("game");
	game_div.className = "grid";
	game.appendChild(game_div);
	return(game);
}
