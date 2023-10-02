
class IsNotAlpha extends Error {
	constructor (messaje) {
		super (messaje);
		this.men = messaje;
	}
	get messaje () {
		return (this.men);
	}
}

class IsNotDigit extends Error {
	constructor (messaje) {
		super (messaje);
		this.men = messaje;
	}
	get messaje () {
		return (this.men);
	}
}

class NumberSymbol extends Error {
	constructor (messaje) {
		super (messaje);
		this.men = messaje;
	}
	get messaje () {
		return (this.men);
	}
}

class EmptyString extends Error {
	constructor (messaje) {
		super (messaje);
		this.men = messaje;
	}
	get messaje () {
		return (this.men);
	}
}
