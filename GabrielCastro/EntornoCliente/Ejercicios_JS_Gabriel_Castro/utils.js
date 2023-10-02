
function is_even(n) {
	if (isNaN (n))
		throw new IsNotDigit ("IS_NOT_A_DIGIT");
	return (n % 2 === 0 ? "The number is even" : "The number is odd");
}

function is_uppercase(string) {
	var control = 0;
	
	if (!string)
		throw new EmptyString ("EMPTY_STRING");
	for (let i = 0; i < string.length; i++) {
		if (string[i] > 'A' && string[i] < 'Z' || string[i] > 'a' && string[i] < 'z')
			control = 1;
	}
	if (control == 0)
		throw new IsNotAlpha ("THERE_IS_NOT_ALPHA_CHARS");
	if (string === string.toLowerCase())
		var messaje = "There is only lowecase characters in the text.";
	else if (string === string.toUpperCase())
		var messaje = "There is only uppercase characters in the text.";
	else
		var messaje = "There are both uppercase and lowercase characters in the text.";
	return (messaje);
}

function is_pal(string) {
	if (!string)
		throw new EmptyString ("EMPTY_STRING");
	let s = string.split(" ").join("").toLowerCase();
	let r = [...s].reverse().join('');
	if (s.localeCompare(r) === 0)
		return ("The text is a palindrome.");
	else
		return ("The text is not a palindrome.");
}
