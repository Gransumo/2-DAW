
function showDetails() {
	var links = document.getElementsByTagName("a");
	var parrafo = document.getElementsByTagName("p")[2];
	var n = 0;
	for (let i = 0; i < links.length; i++) {
		if (links[i].href == "http://prueba/")
		n++;
	}
	var nodes = [
		create_node("li", "El numero de enlaces de la página es: " + links.length), 
		create_node("li", "El penultimo enlace es: "), 
		create_node("li", "El numero de enlaces que enlazan a http://prueba es " + n), 
		create_node("li", "el numero de enlaces del tercer parrafo es " + parrafo.getElementsByTagName("a").length)
	];
	nodes[1].appendChild(create_node("a", links[links.length - 2].href));
	nodes[1].getElementsByTagName("a")[0].href = links[links.length - 2].href;
	var div_list = create_node("div", append_nodes("ul", nodes));
	div_list.className = "list_container";
	var div_content = create_node("div", div_list);
	div_content.className = "content";
	document.getElementById("seccion").appendChild(div_content);
}

function hideDetails() {
	var divs = document.getElementById("seccion").getElementsByTagName("div");
	divs[1].parentNode.removeChild(divs[1]);
}

var		control = 0;
const	buttom = document.getElementById("get_details");

buttom.addEventListener("click", () =>{
	if (control == 0) {
		showDetails();
		control = 1;
		buttom.innerHTML = "Hide Details";
	}
	else{
		hideDetails();
		control = 0;
		buttom.innerHTML = "Show Details"
	}
});
