<?php
	$resultado;
	if (isset($_POST["operacion"]) && isset($_POST["number1"]) && isset($_POST["number2"])) {
		switch ($_POST["operacion"]) {
			case "Suma":
				$resultado = ((int)$_POST["number1"]+(int)$_POST["number2"]);
				break;
			case "Resta":
				$resultado = ((int)$_POST["number1"]-(int)$_POST["number2"]);
				break;
			case "Multiplicacion":
				$resultado = ((int)$_POST["number1"]*(int)$_POST["number2"]);
				break;
			case "Division":
				$resultado = ((int)$_POST["number1"]/(int)$_POST["number2"]);
				break;
		}
		header("Location: ../webs/calculadora.php?mensaje=". urlencode($resultado));
		exit;
	}
?>
