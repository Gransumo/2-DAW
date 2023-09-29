
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

function is_pair(n) {
	if (isNaN(n))
		throw new is_not_digit("IS_NOT_A_DIGIT");
	if (n % 2 == 0)
		return ("El numero es par");
	else
		return ("El numero es impar");
}

function is_uppercase(cadena){
	var upper;
	var lower;
	var other;

	var mensaje;
	for (let i = 0; i < cadena.length; i++) {
		if (cadena[i] >= "A" && cadena[i] <= "Z")
			upper = 1;
		else if (cadena[i] >= "a" && cadena[i] <= "z")
			lower = 1;
		else
			other = 1;
	}
	if (upper == 0 && lower == 1)
		mensaje = "Se han encontrado todo minusculas";
	else if (upper == 1 && lower == 0)
		mensaje = "Se han encontrado todo mayusculas";
	else if (upper == 1 && lower == 1)
		mensaje = "Hay caracteres tanto mayusculas como minusculas";
	else
		throw new not_alpha("No se han encontrado caracteres alfabeticos");
	if (other == 1)
		return (mensaje + " y tambien se han encontrado caracteres no alfabeticos");
	return (mensaje);
}

function mid_string(string){
	let mat;
	for (let i = 0; i < array.length/2; i++) {
		mat[i]
		
	}
}

function is_pal(string) {
	let mat = mid_string()

}
