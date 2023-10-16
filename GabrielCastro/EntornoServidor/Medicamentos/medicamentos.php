<?php


function get_invenroty() {
	return (json_decode(file_get_contents("inventory.json")));
}

function info_query($nombre_medicamento, $sucursal) {

	$inventory = get_invenroty();
	$medicamento_obj = null;
	foreach ($inventory as $medicamento) {
		if ($medicamento->nombre == $nombre_medicamento)
		$medicamento_obj = $medicamento;
	}
	echo (
		($sucursal != "Sucursal A" && $sucursal != "Sucursal B" && $sucursal != "Sucursal C") ? "No existe la sucursal: \"{$sucursal}\"\n\n" :
		(($medicamento_obj == null) ? "El medicamento NO existe en el inventario\n\n" :
		(($medicamento_obj->sucursal != $sucursal || $medicamento_obj->cantidadStock == 0) ? "El medicamento NO se encuentra disponible en {$sucursal}\n\n" :
		(($medicamento_obj->cantidadStock >= 10) ? "El medicamento {$medicamento_obj->nombre} está disponible en {$sucursal}. Precio: {$medicamento_obj->precio}. Hay {$medicamento_obj->cantidadStock} unidades en stock\n\n":
		"El medicamento {$medicamento_obj->nombre} está disponible en {$sucursal}. ¡Últimas unidades disponibles! Precio: {$medicamento_obj->precio}. Hay {$medicamento_obj->cantidadStock} unidades en stock\n\n")))
	);
}

function valor_sucursal($sucursal) {
	$valor = 0;
	$inventory = get_invenroty();

	foreach ($inventory as $medicamento) {
		if ($medicamento->sucursal == $sucursal)
			$valor += ($medicamento->precio * $medicamento->cantidadStock);
	}
	return (($sucursal != "Sucursal A" && $sucursal != "Sucursal B" && $sucursal != "Sucursal C") ? "No existe la sucursal: \"{$sucursal}\"\n\n" : $valor);
}

function exe1() {
	$medicamento = readline("Indique el nombre del medicamento que desea consultar\n");
	$sucursal = readline("Indique la sucursal en la que desea buscar (A, B, C)\n");
	info_query($medicamento, "Sucursal ".strtoupper($sucursal));
}

function exe2() {
	$sucursal = readline("Indique la sucursal cuyo valor total desea consultar (A, B, C)\n");
	echo(valor_sucursal("Sucursal ". strtoupper($sucursal))."\n");
}

do {
	$exit = false;
	$input = readline("Que consulta desea hacer:\n\t1. Consultar médicamento en una sucursal\n\t2. Consultar valor total de una sucursal\n\t3. Salir\n\r");
	switch ($input) {
		case '1':
			exe1();
			break;
		case '2':
			exe2();
			break;
		case '3':
			$exit = true;
			break;
		default:
			echo "Elije solo una de las opciones disponibles (1, 2, 3).\n";
			break;
	}
} while ($exit == false);

?>