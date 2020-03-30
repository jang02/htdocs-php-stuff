<?php

require 'Classes/Type.php';
require 'Classes/Move.php';
require 'Classes/Pokemon.php';

$chimchar = new Pokemon(
    'Chimchar', 'Jesse', 10, 44, 90, 80,
    [
    new Move('Ember', 40, Type::FIRE),
    new Move('Scratch', 40, Type::NORMAL),
    new Move('Flame Wheel', 60, Type::FIRE),
    new Move('Acrobatics', 55, Type::FLYING)
    ],
    ['Fire']);

$scyther = new Pokemon(
    'Scyther', 'Scyther', 10, 70, 90, 80,
    [
    new Move('False Swipe', 40, Type::NORMAL),
    new Move('Quick Attack', 40, Type::NORMAL),
    new Move('Air Slash', 75, Type::FLYING),
    new Move('X-Scissor', 80, Type::BUG)
    ],
    ['Bug', 'Flying']);

$pkmnjer = new Pokemon(
    'Houndoom', 'Jer', 10, 120, 100, 80,
    [
    new Move('Hyper Beam', 90, Type::NORMAL),
    new Move('Foul Play', 95, Type::DARK),
    new Move('Inferno', 100, Type::FIRE),
    new Move('Crunch', 80, Type::DARK)
    ],
    ['Dark', 'Ghost']);

$pikachu = new Pokemon(
    'Pikachu', 'Pikachu', 10, 60, 80, 80,
    [
        new Move('Electric Ring', 50, Type::ELECTRIC),
        new Move('Pika Punch', 20, Type::NORMAL)
    ],
    ['Electric']);
$charmeleon = new Pokemon(
    'Charmeleon', 'Charmeleon', 10, 60, 80, 80,
    [
        new Move('Head Butt', 10, Type::NORMAL),
        new Move('Flare', 30, Type::FIRE)
    ],
    ['Fire']);
$custompokes = [$chimchar, $scyther, $pkmnjer];

$bag = [$pikachu, $charmeleon];




?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pokemon-2020</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="pokemon.css" >
</head>
<body>

    <div class="container">

        <?php foreach($bag as $pok) {  ?>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style="height: 350px; width: 100%" src="<?php echo $pok->url?>" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><?php echo $pok->name.' ('.$pok->pokemon.') '.$pok->level;?></h5>
                    <p class="card-text"><?php foreach($pok->types as $type){
                        echo $type.' ';
                        }
                        echo '<br> Health: <span class="movedamage">'.$pok->health.'</span><br>Attack: <span class="movedamage">'.$pok->attack.'<br></span><br>Defence: <span class="movedamage">'.$pok->defence.'<br>' ?></span></p>
                </div>
                <ul class="list-group list-group-flush">
                    <?php foreach($pok->moves as $move){
                        echo '<li class="list-group-item"><span class="movename">'.$move->name.'</span> <span class="movetype">'.
                            $move->type[0].'</span> <span class="movedamage">'.
                            $move->power.

                            '</span></li>';
                    } ?>
                </ul>
            </div>

        <?php }



        $pikachu->attack($pikachu->moves[0], $charmeleon);
        $charmeleon->attack($charmeleon->moves[1], $pikachu);

        ?>

    </div>

</body>
</html>
