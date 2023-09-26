class number_format extends error {
	
	constructor (mensaje){
		this.mensaje = mensaje;
	}
}

class number_isdigit extends number_format {
	constructor () {
		super ("IS_NOT_A_NUMBER");
	}
}

class number_symbol extends number_format {
	constructor () {
		super ("NEGATIVE_NUMBER");
	}
}
