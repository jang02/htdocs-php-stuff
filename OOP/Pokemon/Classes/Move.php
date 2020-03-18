<?php


class Move{
public $name;
public $power;
public $type;

    public function __construct($name, $power, $type){
        $this->name = $name;
        $this->power = $power;
        $this->type = $type;
    }
}