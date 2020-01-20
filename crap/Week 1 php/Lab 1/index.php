<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
echo "<h1>Hello World!</h1>";

define('helloworld', "<h1>Hello World!</h1>");
echo helloworld;

$text = "<h1>Learning PHP!</h1>";
print $text;
$text = "<h1>Hello world!</h1>";
print $text;

$hello = "<h1> Hello ";
$world = "World </h1";

print $hello. $world;

$array = ["</br><h1>Hello", " World</h1>"];
echo $array[0]. $array[1];

?>
</body>
</html>