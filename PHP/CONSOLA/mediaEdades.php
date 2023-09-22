<?php

$edades = 0;
$edad = 0;
$i = 1;
$j = 0;
echo "We are going to do average age of 4 students\n";
while ($i <= 4) {
    do {
        echo "\nAge $i: ";
        $edad = trim(fgets(STDIN));
        if (!isset($edad) || !is_numeric($edad) || $edad > 100)
            echo "PLEASE SET AN VALID AGE\n";
        else
            $j = 1;
    }while ($j == 0);
    $edades += $edad;
    $i++;
}

$average = $edades / 4;
echo "The average is $average\n";

?>