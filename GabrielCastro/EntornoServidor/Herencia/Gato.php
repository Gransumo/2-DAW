<?php

require_once("Animal.php");

class Gato extends Animal {
	public function __construct(String $nombre, int $edad) {
		parent:: __construct($nombre, $edad);
	}

	public function getNombre() {
		return ($this->nombre);
	}

	public function getEdad() {
		return ($this->edad);
	}

	public function emitirSonido() {
		return ("Meow!");
	}
}

?>