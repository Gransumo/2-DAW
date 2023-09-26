<?php

$nombre;
$correo;

if (isset($_POST["nombre"]) && isset($_POST["correo"])) {
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];

	echo "Hola $nombre<br>Tu correo electronico es $correo";
}

?>