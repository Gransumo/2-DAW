/* meses = new Array(12);

for (let index = 0; index < meses.length; index++)
	meses[index] = prompt("Indique el valor de la posicion " + index);

for (let i = 0; i < meses.length; i++)
	alert (meses[i]);
 */

/* var valores = [true, 5, false, "hola", "adios", 2];

var g_boolean = [valores[2], valores[0]];
var numeros = [valores[1], valores[5]];

if ((valores[3] > valores[4]) == g_boolean[1])
	alert (valores[3] + " es mayor que " + valores[4]);
else if((valores[3] == valores[4]) == g_boolean[1])
	alert (valores[3] + " y " + valores[4] + " son iguales");
else
	alert (valores[3] + " es menor que " + valores[4]);

alert (
	numeros[0] + " + " + numeros[1] + " = " + (numeros[0] + numeros[1]) + "\n" +
	numeros[0] + " - " + numeros[1] + " = " + (numeros[0] - numeros[1]) + "\n" +
	numeros[0] + " * " + numeros[1] + " = " + (numeros[0] * numeros[1]) + "\n" +
	numeros[0] + " / " + numeros[1] + " = " + (numeros[0] / numeros[1]) + "\n"
);
 */

var numero1 = 5;
var numero2 = 8;
if(numero1 > numero2)
	alert("numero1 no es mayor que numero2\n");
if(numero2 > 0) 
	alert("numero2 es positivo\n");
if(numero1 < 0 || numero1 != 0)
	alert("numero1 es negativo o distinto de cero\n");
if(++numero1 < numero2) 
	alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2\n");
