
function validar() {
	const formulario = document.getElementById("form");
	formulario.addEventListener("submit", function(event) {
		const nombre = document.getElementById("nombre").value;
		const apellido = document.getElementById("apellido").value;
		if (!nombre || !apellido) {
			alert("Tanto Nombre como Apellido son OBLIGATORIOS");
			event.preventDefault();
		}
	});
}
document.addEventListener("DOMContentLoaded", validar());
