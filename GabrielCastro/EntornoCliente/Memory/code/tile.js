
class tile {
	constructor(nombre, img_src) {
		this._nombre = nombre;
		this._img_src = img_src;
	}
	get nombre () {
		return (this._nombre);
	}
	get img_src () {
		return (this._img_src);
	}
}
