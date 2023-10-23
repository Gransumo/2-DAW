<?php

interface Animales {
	public function emitirSonido();
}


abstract class Animal implements Animales{
	protected String $nombre;
	protected int $edad;

	public function __construct(String $nombre, int $edad) {
		$this->nombre = $nombre;
		$this->edad = $edad;
	}

	public function emitirSonido() {
		return ("Sonido genérico");
	}
}

?>