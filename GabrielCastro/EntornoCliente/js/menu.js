
var resultado;

function operar(operacion) {
	var num1;
	var num2;
	do {
		var i = 0;
		num1 =  prompt("Primer numero por favor");
		if (isNaN(num1))
			alert ("Un valor numerico por favor");
		else
			i = 1
	} while (i == 0);
	
	do {
		var i = 0;
		num2 =  prompt("Segundo numero por favor");
		if (isNaN(num2))
			alert ("Un valor numerico por favor");
		else
			i = 1
	} while (i == 0);
	if (operacion == "+")
		resultado = parseInt(num1) + parseInt(num2);
	else
		resultado = parseInt(num1) - parseInt(num2);
	return (resultado);
}

var operacion;

do {
	var j = 0;
	operacion = prompt("Qué operación deseas realizar?\n1. Suma.\n2. Resta.\n5. Salir\n");
	if (operacion != "1" && operacion != "2" && operacion != "5")
		alert ("Escribe solo una de las ópciones (1, 2, 5)");
	else
		j = 1
} while (j == 0);
switch (operacion) {
	case "1":	
		document.write("Resultado: " + operar("+"));
		break ;
	case "2":	
		document.write("Resultado: " + operar("-"));
		break ;
}

