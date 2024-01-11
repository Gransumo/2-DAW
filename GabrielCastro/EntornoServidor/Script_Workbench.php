<?php

$direccion = "localhost";
$usuario = "root";
$contraseña = "0242651963Gg.";
$baseDatos = "miOtraBaseDeDatos";

// Conexión a la base de datos
try {
	$conexion = mysqli_connect($direccion, $usuario, $contraseña, $baseDatos);
	
	// Inserción de datos
	$query_insert = "INSERT INTO ejemplo (nombre, apellido, telefono) VALUES ('Gabriel', 'Castro', '123456789')";
	$resultado = mysqli_query($conexion, $query_insert);

	// Mostrar resultado
	$query_select = "SELECT * FROM ejemplo";
	$resultado = mysqli_query($conexion, $query_select);
	while ($fila = mysqli_fetch_array($resultado)) {
		//Imprimo por consola los resultados
		echo $fila['nombre'] . " " . $fila['apellido'] . " " . $fila['telefono'] . "\n";
	}
} catch (mysqli_sql_exception $th) {
	echo "Error de conexión: " . $th->getMessage();
}

?>