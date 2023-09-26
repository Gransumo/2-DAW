<?php
	$opcion;
	if (isset($_GET["opcion"])) {
		$opcion = $_GET["opcion"];
		switch ($opcion) {
			case 'acceso':
				echo "HAS SELECCIONADO ACCESO";
				break;
			case 'configuracion':
				echo "HAS SELECCIONADO CONFIGURACION";
				break;
			case 'ayuda':
				echo "HAS SELECCIONADO AYUDA";
				break;	
			case 'acercaDe':
				echo "HAS SELECCIONADO ACERCA DE";
				break;
			case 'salir':
				echo "HAS SELECCIONADO SALIR";
				break;
			default:
				echo "Opcion no válida";
				break;
		}
	}
?>