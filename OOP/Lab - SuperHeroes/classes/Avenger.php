<?php


class Avenger extends Superhero{
public $team = 'Avengers';

    public function __construct($name, $gender, $oneline){
        parent::__construct($name, $gender, $this->team, $oneline);
    }
}