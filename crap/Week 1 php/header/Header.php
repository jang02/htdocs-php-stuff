<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php

    $idnamearray = [
        "first",
        "second",
    ];

    $headerarray = [
        "Your text",
        "here!"
    ];

    echo "<div id='header'>";

    for ($i = 0; $i < sizeof($idnamearray); $i++){
        echo "<h1 id='$idnamearray[$i]'>$headerarray[$i]</h1>";
    }

    echo "</div>";

?>
</body>
</html>