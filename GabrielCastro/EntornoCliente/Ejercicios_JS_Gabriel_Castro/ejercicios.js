
function ex1() {
	let n = parseFloat (prompt ("Give a number and i will say you if the number is even or odd:"));
	try {
		var messaje = is_even(n);
		alert (messaje);
	} catch (error) {
		if (error instanceof IsNotDigit)
			alert (error.messaje);
	}
}

function ex2() {
	let s = prompt("Give me some text and i will say you if the text is uppercase or lowercase.");
	try {
		var messaje = is_uppercase(s);
		alert (messaje);
	} catch (error) {
		if (error instanceof EmptyString || error instanceof IsNotAlpha)
			alert (error.messaje);
	}
}

function ex3() {
	let s = prompt("Give me some text and i will say you if the text is a palindrome");
	try {
		var messaje = is_pal(s);
		alert (messaje);
	} catch (error) {
		if (error instanceof EmptyString)
			alert (error.messaje);
	}
}

do {
	var exit;

	exit = false;
	var num_input = parseInt (prompt ("Which exercise do you want: \n1. Exercise 8.\n2. Exercise 9.\n3. Exercise 10\n4. Exit"));
	switch(num_input){
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
			break;
		default:
			alert ("Please, choose only one of the 4 valid options (1, 2, 3, 4)");
	}
}while (!exit);
 