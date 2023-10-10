
class tile {
	constructor(nombre, img_src) {
		this._nombre = nombre;
		this._img_src = img_src;
		this._fliped = false;
	}
	get nombre () {
		return (this._nombre);
	}
	get img_src () {
		return (this._img_src);
	}
	get fliped() {
		return (this._fliped);
	}
	flip () {
		this._fliped = !this._fliped;
	}
}
