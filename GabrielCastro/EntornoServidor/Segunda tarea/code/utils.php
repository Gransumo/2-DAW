<?php
	function obtenerColor(){
		if (isset($_COOKIE['color']))
			return ($_COOKIE['color']);
		else
			return ("#fff");
	}
?>