
function factorial(numero){
	if (isNaN(numero))
		throw new is_not_digit();
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

function is_even(n) {
	if (isNaN(n))
		throw new is_not_digit("IS_NOT_A_DIGIT");
	return (n % 2 === 0 ? "The number is even" : "The number is odd");
}

function is_uppercase(string) {
	var control;
	
	if (!string)
		throw new empty_string("EMPTY_STRING");
	for (let i = 0; i < string.length; i++) {
		if (string[i] > 'A' && string[i] < 'Z' || string[i] > 'a' && string[i] < 'z')
			control = 1;
	}
	if (control == 0)
		throw new is_not_alpha("THERE_IS_NOT_ALPHA_CHARS");
	if (string === string.toLowerCase())
		var mensaje = "There is only lowecase characters in the text.";
	else if (string === string.toUpperCase())
		var mensaje = "There is only uppercase characters in the text.";
	else
		var mensaje = "There are both uppercase and lowercase characters in the text.";
	return (mensaje);
}

function is_pal(string) {
	if (!string)
		throw new empty_string("EMPTY_STRING");
	let s = string.split(" ").join("").toLowerCase();
	let r = [...s].reverse().join('');
	if (s.localeCompare(r) === 0)
		return ("The text is a palindrome.");
	else
		return ("The text is not a palindrome.");
}
