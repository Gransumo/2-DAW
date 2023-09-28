<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Contador</title>
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
					<?php
						include "../code/contador_code.php";
					?>
			</section>
		</div>
	</main>
</body>
</html>
