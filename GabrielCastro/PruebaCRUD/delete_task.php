<?php
	include("conexion.php");
	if (isset($_GET['id'])) {
		$id = $_GET['id'];
		$query = "DELETE FROM tareas WHERE id = $id";
		$result = mysqli_query($conn, $query);
		if (!$result) {
			die("Query Failed");
		}
		$_SESSION['message'] = 'Tarea Eliminada Exitosamente';
		$_SESSION['message_type'] = 'danger';
		header("Location: index.php");
	}

?>