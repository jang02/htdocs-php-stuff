<?php


class Pokemon{

public $pokemon;
public $alive;
public $url;
public $level;
public $name;
public $health;
public $attack;
public $defence;
public $moves = [];
public $types = [];


    public function __construct($pokemon, $name, $level, $max_health, $attack, $defence, $moves, $types){
        $this->pokemon = $pokemon;
        $this->name = $name;
        $this->level = $level;
        $this->health = $this->statFormula($max_health,true);
        $this->attack = $this->statFormula($attack);
        $this->defence = $this->statFormula($defence);
        $this->moves = $moves;
        $this->types = $types;
        $this->alive = true;
        $this->url = 'https://img.pokemondb.net/artwork/' . strtolower($pokemon) . '.jpg';
    }

    public function __toString() {
        return json_encode($this);
    }

    public function status(){
        echo $this->alive;
        echo $this->health;
    }

    public function setHealth($hp){
        $this->health = $hp;
    }
    public function getHealth(){
        return $this->health;
    }


    public function attack($move, $enemy){
        $movetype = $move->type;
        $damage = (($this->level / 5 + 2) * $move->power * $this->attack / $enemy->defence) / 50 + 2;
        for ($i = 0; $i < sizeof($enemy->types); $i++){
            if(in_array($enemy->types[$i], $movetype[1])){
                $damage *= 2;
            }
            else if(in_array($enemy->types[$i], $movetype[2])){
                $damage *= 0.5;
            }
            else if(in_array($enemy->types[$i], $movetype[3])){
                $damage *= 0;
            }
        }

        $damage = round($damage, 0);

        if ($enemy->alive && $this->alive) {
            if ($damage > 1000) {
                echo "Cheating damage stat found!";
            } else {
                echo '<br><span style="color: #00bf00">' . $this->name . ' (' . $this->pokemon . ')</span> attacked <span style="color: red">' . $enemy->name .
                    ' (' . $enemy->pokemon . ')</span> using ' . $move->name . ' and did <span style="color: #00bfbf;">' . $damage . '</span> damage!';
                $enemy->setHealth($enemy->health -= $damage);
                if ($enemy->getHealth() <= 0) {
                    echo '<br><span style="color: red">' . $enemy->name . ' (' . $enemy->pokemon . ')</span> fainted! <span style="color: #00bf00">' . $this->name . ' (' . $this->pokemon . ')</span> has won the battle!';
                    $enemy->setHealth(0);
                    $enemy->alive = false;
                } else {
                    echo '<br><span style="color: red">' . $enemy->name . ' (' . $enemy->pokemon . ')</span> has ' . $enemy->health . 'HP left!';
                }
            }
            echo "<br>";
        }
    }

    private function statFormula($basestat, bool $health = false): int {
        $stat = $basestat;
        $iv = rand(0, 32);
        $ev = 0;
        if ($health) {
            return floor(
                    (2 * $stat + $iv + floor(sqrt($ev) / 4)) * $this->level / 100
                ) + $this->level + 10;
        }
        return floor(
            (
                floor((2 * $stat + $iv + floor(sqrt($ev) / 4)) * $this->level / 100) + 5
            ));
    }

}