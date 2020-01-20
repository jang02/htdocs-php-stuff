<?php

require(ROOT . "model/RiderModel.php");

function create()
{
    render("rider/create");
}
function edit(){
    render("rider/edit");
}
function delete(){
    render("rider/delete");
}