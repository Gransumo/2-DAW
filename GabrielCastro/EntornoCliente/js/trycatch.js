
function factorial(numero){
	if (isNaN(numero))
		throw new number_isdigit();
	if (numero < 0)
		throw new number_symbol();
	if (numero === 0 || numero === 1)
	  return 1;
	let resultado = 1;
	for (let i = 2; i <= numero; i++) {
	  resultado *= i;
	}
	return resultado;
}

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
