<?php
require_once "./Notificacion.php";

trait Notificable {

	public function enviarNotificacion ($mensaje){
		echo ($mensaje);
	}

	public function registrarNotificacion(RegistroNotificaciones $registro, $notificacion) {
		$registro->añadirRegistro($notificacion);
	}

}

?>
