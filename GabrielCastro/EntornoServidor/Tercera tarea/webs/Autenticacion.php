<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Autenticacion</title>
	<?php
		if(isset($_COOKIE["user"]))
		{

		}
	?>
</head>
<body>
	<header>
		<div id="presentacion">
		</div>
		<div id="navegacion">
			<nav>
				<ul>
					<li><a href="./Contador.php">Contador</a></li>
					<li><a href="./Color.php">Color</a></li>
					<li><a href="./Autenticacion.php">Autenticacion</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<main>
		<div class="all">
			<h1 class="titulo">AUTENTICACION</h1>
			<section class="seccion" id="seccion">
				<script src="../code/autenticacion.js"></script>
			</section>
		</div>
	</main>
</body>
</html>
