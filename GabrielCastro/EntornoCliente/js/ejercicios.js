
function ex1() {
	let n = parseFloat(prompt("Give a number:"));
	try {
		if (isNaN(n))
			throw new is_not_digit("IS_NOT_A_DIGIT");
		alert(n % 2 === 0 ? "The number is even" : "The number is odd");
	} catch (error) {
		if (error instanceof is_not_digit)
			alert("Hola");
	}
}

function ex2() {
	let s = prompt("Give me some text.");
	try {
		alert(is_uppercase(s));
	} catch (error) {
		if (error instanceof is_not_alpha)
			alert(error.mensaje);
	}
}

function ex3() {
	let s = prompt("Give me some text and i will say you if the text is a palindrome");
	try {
		alert (is_pal(s));
	} catch (error) {
		if (error instanceof empty_string)
			alert (error.mensaje);
	}
}

do {
	var exit;

	exit = false;
	var inputNumero = parseInt(prompt("Que ejercicio quieres: \n1. Ejercicio 8.\n2. Ejercicio 9.\n3. Ejercicio 10\n4.Salir"));
	switch(inputNumero){
		case 1:	
			ex1();
			break;
		case 2:
			ex2();
			break;
		case 3:
			ex3();
			break;
		case 4:
			exit = true;
		default:
			alert ("Elije solo una de las 4 opciones validas (1, 2, 3, 4)");
	}
}while (!exit);
 