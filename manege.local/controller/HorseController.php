<?php

require(ROOT . "model/HorseModel.php");

function index(){
    render("horse/index", array(
        'horse' => getAllHorses()
    ));
}
function create()
{
    render("horse/create");
}
function edit(){
    render("horse/edit");
}
function delete(){
    render("horse/delete");
}
function store(){
    $type = $name = $ras = $schofthoogte = "";
    $type = ValidateData($_POST["type"]);
    $name = ValidateData($_POST["name"]);
    $ras = ValidateData($_POST["ras"]);
    $schofthoogte = ValidateData($_POST["schofthoogte"]);
    if ($type == "" || $name == "" || $ras == "" || $schofthoogte == ""){
        if($name == ""){
            $_SESSION["error"][] = "Vul een geldige naam in";
        }
        if($ras == ""){
            $_SESSION["error"][] = "Vul een geldig ras in";
        }
        if($schofthoogte == ""){
            $_SESSION["error"][] = "Vul een geldige schofthoogte in";
        }
        render("horse/create");
    }
    else{
        createHorse($type, $name, $ras, $schofthoogte);
        $_SESSION["success"][] = "Successvol een $type met de naam $name Toegevoegd!";
        index();
    }
    
}