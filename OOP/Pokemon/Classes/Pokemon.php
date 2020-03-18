<?php


class Pokemon{

public $pokemon;
public $url;
public $name;
public $health;
public $moves = [];
public $resistances = [];
public $weaknesses = [];
public $types = [];

    public function __construct($pokemon, $name, $max_health, $moves, $types){
        $this->pokemon = $pokemon;
        $this->name = $name;
        $this->health = $max_health;
        $this->moves = $moves;
        $this->types = $types;
        $this->url = 'https://img.pokemondb.net/artwork/' . strtolower($pokemon) . '.jpg';
    }

    public function __toString() {
        return json_encode($this);
    }

    public function showHealth(){
        echo $this->health;
    }

}