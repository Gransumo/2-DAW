<?php
	session_start();
	if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["color"]))
	{
		$color = $_POST["color"];
		setcookie("color", $color, time() + 3660 * 24);
	}
	header('Location: ../webs/Calculadora.php');
	exit;
?>
