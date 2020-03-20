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
        $this->health = $this->statFormula($max_health, 0, true);
        $this->attack = $this->statFormula($attack, 0);
        $this->defence = $this->statFormula($defence, 0);
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


    public function attack(){

    }

    private function statFormula($basestat, int $iv, bool $health = false): int {
        $stat = $basestat;
        $ev = 0;
        if ($health) {
            return floor(
                    (2 * $stat + 32 + floor(sqrt($ev) / 4)) * $this->level / 100
                ) + $this->level + 10;
        }
        return floor(
            (
                floor((2 * $stat + 32 + floor(sqrt($ev) / 4)) * $this->level / 100) + 5
            ));
    }

}