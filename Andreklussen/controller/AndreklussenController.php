<?php

require(ROOT . "model/AndreklussenModel.php");

// http://localhost/manege/home/index
function index(){
    render("Andreklussen/index");
}
function contact(){
    render("Andreklussen/contact");
}

