<?php

	include("conexion.php");

	if (isset($_POST['save_task'])) {
		$title = $_POST['title'];
		$description = $_POST['description'];
		$query = "INSERT INTO tareas(nombre, descripcion) VALUES ('$title', '$description')";
		$result = mysqli_query($conn, $query);
		if (!$result) {
			die("Query Failed");
		}
		$_SESSION['message'] = 'Tarea Guardada Exitosamente';
		$_SESSION['message_type'] = 'success';
		header("Location: index.php");
	}
?>
