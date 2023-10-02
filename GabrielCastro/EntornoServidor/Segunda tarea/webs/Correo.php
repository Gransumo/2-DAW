<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Correo</title>
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
					<li><a href="./Autenticacion.php">Autenticacion</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<main>
		<div class="all">
			<h1 class="titulo">CORREO</h1>
			<section class="seccion">
				<form action="../code/correo_code.php" method="post">
					<div class="text_inputs">
						<input type="text" name="nombre" class="input_txt" placeholder="Nombre">
						<input type="email" name="correo" class="input_txt" placeholder="Correo">
					</div>
					<div class="buttom">
						<input type="submit" value="Enviar" id="SUBMIT_BUTTOM">
					</div>
				</form>
			</section>
		</div>
	</main>
</body>
</html>
