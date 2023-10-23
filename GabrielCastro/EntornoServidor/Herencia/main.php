<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once("./Animal.php");
require_once("./Perro.php");
require_once("./Gato.php");
require_once("./Pajaro.php");

function put_animals($animals) {
	$table = "";
	$nombreClase;
	foreach ($animals as $animal) {
		$nombreClase = get_class($animal);
		$table .= "
		<tr>
			<td>{$nombreClase}</td>
			<td>{$animal->getNombre()}</td>
			<td>{$animal->getEdad()}</td> 
			<td>{$animal->emitirSonido()}</td>
		</tr>
		"; 
	}
	return ($table);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="./style.css">
	<title>Animales</title>
</head>
<body>
	<div class="container bg-primary">
		<header class="bg-primary">
			<div class="container text-center"><h1>ANIMALES</h1></div>
		</header>
		<div class="row">
			<div class="col text-center">
				<table class="table">
					<thead>
						<tr>
							<th>Animal</th>
							<th>Nombre</th>
							<th>Edad</th>
							<th>Emitir Sonido</th>
						</tr>
					</thead>
					<tbody>
						<?php
							$animales = [
								new Perro ("Chispas", 2),
								new Gato ("Garfield", 4),
								new Pajaro ("Picos", 1),
								new Perro ("Romeo",  12)
							];
							echo put_animals($animales);
							?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>
