
function muestra() {
	var text = document.getElementById("adicional");
	var enlace = document.getElementById("enlace");

	text.style.display = "block";
	enlace.parentElement.removeChild(enlace);
}
