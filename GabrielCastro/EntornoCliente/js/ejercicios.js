
function ex1() {
	let n = prompt("Dime un número:");
	try {
		alert(is_pair(n));
	} catch (error) {
		//if (error instanceof is_not_digit)
			alert(error.mensaje);
	}
}

function ex2() {

}

function ex3() {

}

do {
	var exit;

	exit = false;
	var inputNumero = parseInt(prompt("Que ejercicio quieres: \n1. Ejercicio 8.\n2. Ejercicio 9.\n3. Ejercicio 10\n4.Salir"));
	switch(inputNumero){
		case 1:	
			ex1();
			exit = true;
			break;
		case 2:
			ex2();
			exit = true;
			break;
		case 3:
			ex3();
			exit = true;
			break;
		case 4:
			exit = true;
		default:
			alert ("Elije solo una de las 3 opciones validas (1, 2, 3)");
	}
}while (!exit);
 