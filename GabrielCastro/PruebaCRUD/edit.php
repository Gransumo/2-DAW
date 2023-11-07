
<?php

include("conexion.php");

if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$title	= $_POST['title'];
	$description = $_POST['description'];
	$query = "UPDATE tareas SET nombre = '$title', descripcion = '$description' WHERE id = $id";
	$result = mysqli_query($conn, $query);
	if (!$result) {
		die("Query Failed");
	}
	$_SESSION['message'] = 'Tarea Actualizada Exitosamente';
	$_SESSION['message_type'] = 'warning';
	header("Location: index.php");
}

?>