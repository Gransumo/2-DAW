
function cloneN_node(node, n) {
	var nodes = [];
	for (let i = 0; i < n; i++)
		nodes.push(node.cloneNode(true));
	return (nodes);
}

function get_imgNode() {
	var img = document.createElement("img");
	img.src = "../img/blanco.jpg";
	img.className = "img";
	var cell = create_node("div", img);
	cell.className = "cell";
	return (cell);
}

function set_numeric_id(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].id = i;
	}
}

function set_onClick(array, value) {
	for (let i = 0; i < array.length; i++) {
		array[i].addEventListener("click", value);
	}
}

function get_whites(x, y) {
	var cell = get_imgNode();
	var game_div = append_nodes("div", cloneN_node(cell, x * y));
	set_numeric_id(game_div.getElementsByTagName("img"));
	var game = document.getElementById("game");
	game_div.className = "grid";
	game.appendChild(game_div);
	return(game);
}
