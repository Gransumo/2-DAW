<?php

$nombre;
if (isset($_GET["nombre"])) {
	$nombre = $_GET["nombre"];
	echo "WELCOME ". strtoupper($nombre);
}
?>