<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Calculadora</title>
</head>
<body>
	<header>
		<div id="presentacion">
		</div>
		<div id="navegacion">
			<nav>
				<ul>
					<li><a href="./Sesion.php">Sesion</a></li>
					<li><a href="./Calculadora.php">Calculadora</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<main>
		<div class="all">
			<h1 class="titulo">Calculadora</h1>
			<section>
				<form action="../code/calculadora_code.php" method="post">
					<div class="custom-select">
						<input type="radio" class="option-select" name="operacion" id="Suma" checked>
						<label for="Suma" class="option">Sumar</label>

						<input type="radio" class="option-select" name="operacion" id="Resta" checked>
						<label for="Resta" class="option">Restar</label>
						
						<input type="radio" class="option-select" name="operacion" id="Multiplicacion" checked>
						<label for="Multiplicacion" class="option">Multiplicar</label>
						
						<input type="radio" class="option-select" name="operacion" id="Division" checked>
						<label for="Division" class="option">Dividir</label>
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
			</section>
			</div>
		</div>
	</main>
</body>
</html>
