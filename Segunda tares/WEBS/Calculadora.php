<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <link rel="stylesheet" type="text/css" href="./css/estilos.css"> -->
	<title>Calculadora</title>
</head>
<body>
	
	<header>
		<ul>
		<li><a href="./Sesion.php">Sesion</a></li>
			<li><a href="./Calculadora.php">Calculadora</a></li>
			<li><a href="./Nombres.php">Nombres</a></li>
			<li><a href="./Correo.php">Correo</a></li>
			<li><a href="./Apodos.php">Apodos</a></li>
		</ul>
	</header>
	<div class>
		<div class="calculadora">
			<h1>Calculadora</h1>
			<div class="form">
				<form action="../PHP/WEB/calculadora_code.php" method="post">
					<div id="desplegable">
						<select name="operacion" id="operacion">
							<option value="Suma">Suma</option>
							<option value="Resta">Resta</option>
							<option value="Multiplicacion">Multiplicaion</option>
							<option value="Division">Division</option>
						</select>
					</div>
					<div id="INPUTS">
						<label for="number1">NUMBER 1</label>
						<input type="text" name="number1" id="number1">
					<label for="number2">NUMBER 2</label>
					<input type="text" name="number2" id="number2">
				</div>
				<div id="SUBMIT_BUTTOM">
					<input type="submit" value="Calcular"></input>
				</div>
				<?php 
					if (isset($_GET['mensaje']))
					echo "<p>El resultado es {$_GET['mensaje']}</p><br>";
				?>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
