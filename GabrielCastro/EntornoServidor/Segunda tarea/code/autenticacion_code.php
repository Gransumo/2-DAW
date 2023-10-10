
<?php
	session_start();
	if (($_SERVER["REQUEST_METHOD"] == "POST") && isset($_POST["user"]) && isset($_POST["password"]))
	{
		$user = $_POST["user"];
		if (isset($_POST["guardar"]))
			setcookie("user", $user, time() + 60 * 60 * 24, "/");
		else
			setcookie("user", $user, time() + 1, "/");
	}
	if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["cerrar_sesion"]))
		setcookie("user", "", time() - 3600, "/");
	header("Location: ../webs/Autenticacion.php");
?>
