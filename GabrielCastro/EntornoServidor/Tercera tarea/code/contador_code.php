<?php
	session_start();
	if (isset($_COOKIE["contador"]))
		$contador = $_COOKIE["contador"] + 1;
	else
		$contador = 1;

	setcookie("contador", $contador, time() + 60 * 5);

	if ($contador == 1)
		$mensaje = "Es tu primera vez en esta página";
	else
		$mensaje = "Has entrado " . $contador . " veces a esta página";
	echo "<p>$mensaje<br></p>";
?>
