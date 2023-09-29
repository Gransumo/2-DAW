class number_format extends error {
	
	constructor (mensaje){
		this.mensaje = mensaje;
	}
}

class number_symbol extends number_format {
	constructor () {
		super ("NEGATIVE_NUMBER");
	}
}
