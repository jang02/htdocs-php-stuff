<?php


class Pikachu extends Pokemon
{

    public $voltage;

    public function __construct($pokemon, $name, $level, $max_health, $attack, $defence, $moves, $types, $voltage)
    {
        parent::__construct($pokemon, $name, $level, $max_health, $attack, $defence, $moves, $types);
        $this->voltage = $voltage;
    }
}