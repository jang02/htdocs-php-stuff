<?php

require 'Classes/Type.php';
require 'Classes/Move.php';
require 'Classes/Pokemon.php';

$chimchar = new Pokemon('Chimchar', 'Chimchar', '44', [
    new Move('Ember', 40, Type::FIRE),
    new Move('Scratch', 40, Type::NORMAL),
    new Move('Flame Wheel', 60, Type::FIRE),
    new Move('Acrobatics', 55, Type::FLYING)
    ], [Type::FIRE]);

$scyther = new Pokemon('Scyther', 'Jer', '70', [
    new Move('False Swipe', 40, Type::NORMAL),
    new Move('Quick Attack', 40, Type::NORMAL),
    new Move('Air Slash', 75, Type::FLYING),
    new Move('X-Scissor', 80, Type::BUG)
], [Type::BUG, Type::FLYING]);



$bag = [$chimchar, $scyther];


?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pokemon-2020</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <link rel="stylesheet" href="pokemon.css" >
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>
<body>

    <div class="container">
        <h1 class="title">Pokemon 2020 uitwerking</h1>

        <?php foreach($bag as $pok) {  ?>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="<?php echo $pok->url?>" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><?php echo $pok->name.' ('.$pok->pokemon.')';?></h5>
                    <p class="card-text"><?php foreach($pok->types as $type){
                        echo $type[0].' ';
                        }
                        echo '<br> Health: <span class="movedamage">'.$pok->health ?></span></p>
                </div>
                <ul class="list-group list-group-flush">
                    <?php foreach($pok->moves as $move){
                        echo '<li class="list-group-item"><span class="movename">'.$move->name.'</span> <span class="movetype">'.
                            $move->type[0].'</span> <span class="movedamage">'.
                            $move->damage.

                            '</span></li>';
                    } ?>
                </ul>
            </div>

        <?php } ?>

    </div>

</body>
</html>
