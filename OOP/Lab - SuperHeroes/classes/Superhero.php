<?php


class Superhero{
public $name;
public $gender;
public $team;
public $oneline;

    public function __construct($name, $gender, $team, $oneline){
        $this->name = $name;
        $this->gender = $gender;
        $this->team = $team;
        $this->oneline = $oneline;
    }

    public function __toString() {
        return json_encode($this);
    }

    public function sayOneline(){
        echo '<h2>'.$this->oneline.'</h2>';
    }


}