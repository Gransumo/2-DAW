<?php

// Datos de conexión a la base de datos
$direccion = "localhost";
$usuario = "root";
$contraseña = "0242651963Gg.";
$baseDatos = "miBaseDeDatos";

try {
	// Conexión a la base de datos
	$conexion = mysqli_connect($direccion, $usuario, $contraseña, $baseDatos);
	
	// Consultta sencilla (nombre, apellido y telefono)
	$query = "SELECT * FROM ejemplo";
	$resultado = mysqli_query($conexion, $query);
	while ($fila = mysqli_fetch_array($resultado)) {
		//Imprimo por consola los resultados
		echo $fila['nombre'] . " " . $fila['apellido'] . " " . $fila['telefono'] . "\n";
	}
} catch (mysqli_sql_exception $th) {
	echo "Error de conexión: " . $th->getMessage();
}

?>