<?php

$cadena;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST["nombre"]) && isset($_POST["apellido"])) {
		$nombre = $_POST["nombre"];
		$apellido = $_POST["apellido"];

		$cadena = "Hola " . $nombre . "<br>Tu apellido es: " . $apellido;
	}
	if(isset($_GET["ciudad"]) && $_GET["ciudad"] != NULL) {
		$ciudad = $_GET["ciudad"];
		$cadena = $cadena . "<br>Y tu ciudad es " . $ciudad;
	}
	echo $cadena;
}

?>
