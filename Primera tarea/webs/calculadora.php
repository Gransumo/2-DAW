<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../style.css">
	<title>Calculadora</title>
</head>
<body>
	<header>
		<div id="presentacion">
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ut ipsam fugiat, nostrum, voluptate sunt aut repellat, doloribus inventore laboriosam ex ipsa ratione? Maxime aliquid esse nostrum dolor alias sit.</p>
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
		<div class="content">
			<h1 class="titulo">Calculadora</h1>
			<section>
				<form action="../code/calculadora_code.php" method="post">
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
			</section>
			</div>
		</div>
	</main>
</body>
</html>
