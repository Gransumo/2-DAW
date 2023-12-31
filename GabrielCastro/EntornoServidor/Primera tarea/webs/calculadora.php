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
					<div class="inputs">
						<div class="nums">
							<input type="text" name="number1" id="number1" class="input_num" placeholder="NUMBER 1">
							<input type="text" name="number2" id="number2" class="input_num" placeholder="NUMBER 2">
						</div>
						<div class="custom-select">
							<input type="radio" class="option-select" name="operacion" id="Suma" value="Suma" checked>
							<label for="Suma" class="option">Sumar</label>
							
							<input type="radio" class="option-select" name="operacion" id="Resta" value="Resta" checked>
							<label for="Resta" class="option">Restar</label>
							
							<input type="radio" class="option-select" name="operacion" id="Multiplicacion" value="Multiplicacion" checked>
							<label for="Multiplicacion" class="option">Multiplicar</label>
							
							<input type="radio" class="option-select" name="operacion" id="Division" value="Division" checked>
							<label for="Division" class="option">Dividir</label>
						</div>
					</div>
					<div class="buttom">
						<input type="submit" value="Calcular" id="SUBMIT_BUTTOM"></input>
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
