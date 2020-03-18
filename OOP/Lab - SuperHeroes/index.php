<?php
require 'classes/Superhero.php';
require 'classes/Avenger.php';

$spiderman = new Superhero('Spider-Man', 'male', 'Spiderfriends', 'With great power comes great responsibility');

print_r('<pre>'.$spiderman.'</pre>');
$spiderman->sayOneline();

$thor = new Avenger('Thor', 'male', 'For Asgard!');

print_r('<pre>'.$thor.'</pre>');
$thor->sayOneline();