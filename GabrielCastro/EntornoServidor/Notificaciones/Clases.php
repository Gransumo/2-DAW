<?php

require_once "./traits.php";

class RegistroNotificaciones {
	private $registro;


	public function __construct() {
		$this->registro = [];
	}

	public function getRegistro() {
		return ($this->registro);
	}

	public function añadirRegistro($notificacion) {
		$this->registro[] = $notificacion;
	}
}

class Usuario {
	use Notificable;
	private String $nombre;
	private int $edad;
	private RegistroNotificaciones $registro;

	public function __construct(String $nombre, int $edad) {
		$this->nombre = $nombre;
		$this->edad = $edad;
		$this->registro = new RegistroNotificaciones();
	}

	public function notificarUsuario ($mensaje) {
		$this->enviarNotificacion($mensaje);
		$this->registrarNotificacion($this->registro, $mensaje);
	}

	public function getNombre () {
		return ($this->nombre);
	}

	public function getEdad () {
		return ($this->edad);
	}

	public function getRegistro() {
		return ($this->registro);
	}

}

class Publicacion {
	use Notificable;
	private RegistroNotificaciones $registro;

	public function __construct() {
		$this->registro = new RegistroNotificaciones();
	}
	
	public function notificarPublicacion($mensaje) {
		$this->enviarNotificacion($mensaje);
		$this->registrarNotificacion($this->registro, $mensaje);
	}

	public function getRegistro() {
		return ($this->registro);
	}

}

?>
