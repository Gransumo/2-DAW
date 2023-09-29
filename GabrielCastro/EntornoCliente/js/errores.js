
class Error extends error {
	constructor (mensaje) {
		this.mensaje = mensaje;
	}
	get mensaje() {
		return (this.mensaje);
	}
}

class is_not_alpha extends error {
	constructor (mensaje) {
		this.mensaje = mensaje;
	}
	get mensaje() {
		return (this.mensaje);
	}
}

class is_not_digit extends error {
	constructor (mensaje) {
		super (mensaje);
		this.mensaje = super.mensaje;
	}
	get mensaje () {
		return (this.mensaje);
	}
}
