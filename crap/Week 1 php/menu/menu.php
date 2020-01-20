<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="">
</head>
<body>
<?php

$links = [
    "#",
    "#",
    "#",
    "#",
];

$idnamearray = [
    "Lab_1",
    "Lab_2",
    "Lab_4",
    "Weekopdracht",
];

$headerarray = [
    "Lab 1",
    "Lab 2",
    "Lab 4",
    "Weekopdracht",
];

echo "<div id='menu'>";
echo "<ul>";
for ($i = 0; $i < sizeof($idnamearray); $i++){
    echo "<li id='$idnamearray[$i]' class='opdrachten'><a href='$links[$i]'>$headerarray[$i]</a></li>";
}
echo "</ul>";
echo "</div>";

?>
</body>
</html>