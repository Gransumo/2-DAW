<?php

require_once("Animal.php");

class Gato extends Animal {
	public function __construct(String $nombre, double $edad) {
		parent:: __construct($nombre, $edad);
	}
	public function emitirSonido() {
		return ("Meow!");
	}
}

?>