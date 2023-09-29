
let inputNumero = prompt("Por favor, ingresa un número:");
try {
	let numero = parseFloat(inputNumero);
	let resultado = factorial(numero);
	alert(`El factorial de ${numero} es ${resultado}`);
} catch (error) {
	if (error instanceof number_format) {
		alert("Ocurrió un error inesperado: " + error.mensaje);
	}
}
