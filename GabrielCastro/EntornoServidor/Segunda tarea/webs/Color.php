<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Contador</title>
	<?php
		echo "<style> section {background-color: ". $_COOKIE['color'] ."};</style>";
	?>
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
					<li><a href="./Nombres.php">Nombres</a></li>
					<li><a href="./Correo.php">Correo</a></li>
					<li><a href="./Apodos.php">Apodos</a></li>
					<li><a href="./Contador.php">Contador</a></li>
					<li><a href="./Color.php">Color</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<main>
		<div class="all">
			<h1 class="titulo">SESION</h1>
			<section>
				<form action="../code/color_code.php" method="post">
					<div class="inputs">
						<div class="color_inputs">
							<label for="color">Elije un color</label>
							<input type="color" name="color" id="color" class="input_color">
						</div>
					</div>
					<div class="buttom">
						<input type="submit" value="Cambiar Color" name="Cambiar color" id="SUBMIT_BUTTOM">
					</div>
				</form>
			</section>
		</div>
	</main>
</body>
</html>
