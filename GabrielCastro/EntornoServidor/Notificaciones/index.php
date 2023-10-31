
<?php
require_once "./Notificacion.php";
require_once "./traits.php";
$usuario = new Usuario("Gabriel", 20);
$publicacion = new Publicacion();

$usuario->notificarUsuario("HOLA {$usuario->getNombre()} ESTA ES UNA NOTIFICACION 1 <br>");
$publicacion->notificarPublicacion("ESTA PUBLICACION ESTÁ SIENDO NOTIFICADA 1 <br>");

$usuario->notificarUsuario("HOLA {$usuario->getNombre()} ESTA ES UNA NOTIFICACION 2 <br>");
$publicacion->notificarPublicacion("ESTA PUBLICACION ESTÁ SIENDO NOTIFICADA 2 <br>");


$registroUsuario = $usuario->getRegistro()->getRegistro();
$registroPublicacion = $publicacion->getRegistro()->getRegistro();


?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Notificaciones</title>
</head>
<body>
	<?php
		echo ("<br><br>");
		foreach ($registroUsuario as $registro) {
			echo ($registro . "<br>");
		}
		foreach ($registroPublicacion as $registro) {
			echo ($registro . "<br>");
		}
	?>
</body>
</html>