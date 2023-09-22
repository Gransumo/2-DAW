<?php
$fechaActual =new DateTime();
echo "We are going to calculate your age with your birthday";
echo "Please give me your birthday in Y-M-D format:";
$fechaNacimiento = new DateTime(fgets(STDIN));
$diferencia = $fechaNacimiento->diff($fechaActual);
echo "Tienes $diferencia->y años\n";
?>
