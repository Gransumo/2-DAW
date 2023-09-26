
var operacion;
var resultado;
var num1;
var num2;

do {
	var i = 0;
	var operacion = prompt("Dime que método quieres suma o resta?(+/-)");
	if (operacion != "+" && operacion != "-")
		alert ("Escribe solo '+' o '-' porfavor");
	else
		i = 1
} while (i == 0);

do {
	var i = 0;
	var num1 =  prompt("Primer numero por favor");
	if (isNaN(num1))
		alert ("Un valor numerico por favor");
	else
		i = 1
} while (i == 0);

do {
	var i = 0;
	var num2 =  prompt("Segundo numero por favor");
	if (isNaN(num2))
		alert ("Un valor numerico por favor");
	else
		i = 1
} while (i == 0);

if (operacion == "+")
	resultado = parseInt(num1) + parseInt(num2);
else
	resultado = parseInt(num1) - parseInt(num2);

document.write("Resultado: " + resultado);
