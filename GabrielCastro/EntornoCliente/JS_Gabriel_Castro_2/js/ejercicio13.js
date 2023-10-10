
function añade() {
	const input = document.getElementById("input");
	const list = document.getElementById("list");
	var node = create_node("li", input.value);
	list.appendChild(node);
	input.value = "";
}
