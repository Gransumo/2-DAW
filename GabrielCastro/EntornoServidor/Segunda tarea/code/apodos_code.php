
<?php

$cadena;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST["nombre"]) && isset($_POST["correo"])) {
		$nombre = $_POST["nombre"];
		$correo = $_POST["correo"];

		$cadena = "Hola " . $nombre . "<br>Tu correo es: " . $correo;
	}
	if(isset($_GET["apodo"]) && $_GET["apodo"] != NULL) {
		$apodo = $_GET["apodo"];
		$cadena = $cadena . "<br>Y tu apodo es " . $apodo;
	}
	echo $cadena;
}

?>
