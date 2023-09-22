<?php
	function calcularPromedio($calificaciones) {
		$promedio;

		$promedio = array_sum($calificaciones) / count($calificaciones);
	/* 	foreach ($calificaciones as $nota) {
			$promedio += $nota;
		}
		$promedio /= count($calificaciones); */
		return ($promedio);
	}

	$promedio;
	$calificaciones;

	//$calificaciones = array(85, 92, 78, 90, 88, 76, 85, 89, 94, 88);
	$calificaciones = array(4, 5, 8, 2, 6);
	$promedio = calcularPromedio($calificaciones);
	echo "La media de las calificaciones es: $promedio";

?>