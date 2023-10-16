
document.addEventListener("DOMContentLoaded", () => {
	var n = parseInt(prompt("Dame un numero: "));
	if(n)
		alert((isNaN(n) == true) ? "Tipo de dato no valido" : "El triple del numero es " + (3 * n));
});
