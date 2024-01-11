
<?php

	include "conection.php";

	if(isset($_POST['send'])) {
		$name = $_POST['name'];
		$date_introduction = date('Y-m-d H:i:s');
		$main_ingredient = $_POST['ingredient'];

		// Validar datos
		if(empty($name) || empty($main_ingredient)) {
			echo "Por favor, rellena todos los campos.";
		} else {
			// Crear la consulta SQL INSERT
			$query = "INSERT INTO comidas (nombre, fecha_introduccion, ingrediente_principal) VALUES ('$name', '$date_introduction', '$main_ingredient')";

			if(mysqli_query($conn, $query)) {
				// Si la consulta se ejecutó correctamente, redirigir a la página principal
				header("Location: clientes.html");
			} else {
				// Si hubo error al ejecutar, mostrar mensaje de error
				echo "Error: " . mysqli_error($conn);
			}
		}
	}
?>
