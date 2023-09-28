<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Apodos</title>
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
			<h1 class="titulo">APODOS</h1>
			<section>
				<form id="form" action="../code/apodos_code.php" method="post" onsubmit="changeURL()">
					<div class="text_inputs">
						<input type="text" class="input_txt" name="nombre" placeholder="Nombre" required>
						<input type="email" class="input_txt" name="correo" placeholder="Correo" required>
						<input type="text" class="input_txt" id="apodo" placeholder="Apodo">
					</div>
					<div class="buttom">
						<input type="submit" value="Enviar" id="SUBMIT_BUTTOM">
					</div>
				</form>
				<script>
					function changeURL(){
						var apodo = document.getElementById("apodo").value;
						var newURL = "../code/apodos_code.php?apodo=" + apodo;
						document.querySelector("form").action = newURL;
					}
				</script>
			</section>
		</div>
	</main>
</body>
</html>
