<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php

    $int1 = mt_rand(1,100);
    $int2 = mt_rand(1,100);

    echo $int1." + ".$int2." = ".($int1 + $int2)."<br>";
    echo $int1." - ".$int2." = ".($int1 - $int2)."<br>";
    echo $int1." * ".$int2." = ".($int1 * $int2)."<br>";
    echo $int1." / ".$int2." = ".($int1 / $int2)."<br>";

    echo "<br>";

    for ($i = 1; $i <= 10; $i++) {
        echo "6"." * ".$i." = ".(6 * $i)."<br>";
    }

    function tafel($value) {
        for ($i = 1; $i <= 10; $i++) {
            echo $value." * ".$i." = ".($value * $i)."<br>";
        }
    }
    echo "<br>";
    tafel(6);

    echo "<br>";

    $array = [3, 5, 8, 12];

    foreach ($array as $int) {
        for ($i = 1; $i <= 10; $i++){
            echo $int." * ".$i." = ".($int * $i)."<br>";
        }
        echo "<br>";
    }

?>
</body>
</html>