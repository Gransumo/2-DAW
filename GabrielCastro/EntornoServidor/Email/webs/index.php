<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
	<title>Email</title>
</head>
<body>
<header>
		<div id="presentacion">
		</div>
		<div id="navegacion">
			<nav>
				<ul>
				</ul>
			</nav>
		</div>
	</header>
	<main>
		<div class="all">
			<h1 class="titulo">SESION</h1>
			<section class="seccion">
				<form action="../code/correo_code.php" method="post">
					<div class="text_inputs">
						<input type="text" name="nombre" class="input_txt" placeholder="Nombre">
						<input type="email" name="correo" class="input_txt" placeholder="Correo">
						<input type="text" name="asunto" class="input_txt" placeholder="Asunto">
						<textarea name="mensaje" id="mensaje" cols="30" rows="10" class="input_txt"></textarea>
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
