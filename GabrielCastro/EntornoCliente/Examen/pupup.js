
function openPopup() {
    window.open('popup.html', 'MiPopup', 'width=400,height=300');
}

function calcularCoseno(n) {
	return (Math.cos(n));
}

function getBigger(n) {
	var bigger = 0;
	for (let i = 0; i < n.length; i++) {
		if (n[i] > bigger)
			bigger = n[i];
	}
	return (bigger);
}

function piedraPapelTijera (eleccion_node){
	var eleccion = eleccion_node.id;
	var opciones = ["piedra", "papel", "tijera"];
	var ppt_div = document.getElementById("ppt");
	var eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
	var resultado = "";

	if (eleccionMaquina == eleccion)
		resultado = "Empate";
	else if (eleccionMaquina == "piedra" && eleccion == "papel")
		resultado = "Ganaste";
	else if (eleccionMaquina == "papel" && eleccion == "tijera")
		resultado = "Ganaste";
	else if (eleccionMaquina == "tijera" && eleccion == "piedra")
		resultado = "Ganaste";
	else
		resultado = "Perdiste";

	var mensaje = "He Sacado " + eleccionMaquina  + " " + resultado;
	var tipo = "";
	switch (resultado) {
		case "Ganaste":
			tipo = "success";
			break;
		case "Perdiste":
			tipo = "danger";
			break;
		case "Empate":
			tipo = "warning";
			break;
		default:
	}
	insertNotification(ppt_div, mensaje, tipo);
}

function	insertNotification(div, mensaje, tipo)
{
	div.className = "m-2";
	div.innerHTML = '\
	<div class="alert alert-' + tipo + ' alert-dismissible fade show" rule="alert" id="notification">\
	<span>' + mensaje + '</span>\
	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
	</div>';
}

document.addEventListener("DOMContentLoaded", () => {

	const coseno = document.getElementById("calcularCoseno");
	const mayorQue = document.getElementById("calcularMayorQue");

	coseno.addEventListener("click", function(event) {
		event.preventDefault();
		var n = document.getElementById("cos_input").value;
		var resultado = calcularCoseno(n);
		var coseno_div = document.getElementById("coseno_resultado");
		insertNotification(coseno_div, "El coseno es " + resultado, "success");
	});
	mayorQue.addEventListener("click", function(event) {
		event.preventDefault();
		var inputs = document.querySelectorAll(".input_mayorQue");
		var valores = Array.from(inputs).map(input => parseInt(input.value));
		var resultado = getBigger(valores);
		var mayorQue_div = document.getElementById("mayorQue_resultado");
		insertNotification(mayorQue_div, "El mayor es " + resultado, "success");
	});
});
