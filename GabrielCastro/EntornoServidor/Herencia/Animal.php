<?php

abstract class Animal {
	protected String $nombre;
	protected int $edad;

	public function __construct(String $nombre, double $edad) {
		$this->nombre = $nombre;
		$this->edad = $edad;
	}

	abstract public function emitirSonido();
}

?>