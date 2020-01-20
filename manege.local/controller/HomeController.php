<?php

require(ROOT . "model/AndreklussenModel.php");

// http://localhost/manege/home/index
function index(){
    render("Andreklussen/index", array(
        'planned' => getAllPlanned()
    ));
}
function plannen(){
    render("Andreklussen/plannen");
}
function edit(){
    render("Andreklussen/edit");
}
function delete(){
    render("Andreklussen/delete");
}
