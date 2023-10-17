
function init() {
	var n = prompt("Dame un numero: ");
	if(n) {
		n = parseInt(n);
		alert((isNaN(n)) ? "Tipo de dato no valido" : "El doble del numero es " + (2 * n));
	}
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe9");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			var boton = create_node("button", "Iniciar");
			boton.className = "buttom";
			boton.id = "init_button";
			var buttom_container = create_node("div", boton);
			buttom_container.className = "buttom_container";
			desplegable = create_node("div", buttom_container);
			desplegable.className = "desplegable";
			document.getElementById("ejercicio9").appendChild(desplegable);
			show_node(desplegable);
			document.getElementById("init_button").addEventListener("click", init());
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
