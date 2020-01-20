<?php

require("config.php");

function databaseConnect(){
    try {
        $conn = new PDO("mysql:host=". DB_HOST .";dbname=". DB_NAME, DB_USER, DB_PASS);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if(SHOW_DB_MSG){
            echo "Connected successfully</br>";
        }
        return $conn;

    }
    catch(PDOException $e){
        if(SHOW_DB_MSG){
            echo $e->getMessage();
        }
    }
}
function showUser($user, $table){
    $db = databaseConnect();

    $sql = "SELECT * FROM $table WHERE user = :username";
    $query = $db->prepare($sql);
    $query->bindParam(":username", $user);
    $query->execute();

    $db = null;

    if(SHOW_DB_MSG){
        echo "Data retrieved successfully</br>";
        echo var_dump($query->fetchAll());
    }

    return $query->fetchAll();
}
function showAll($table){
    $db = databaseConnect();

    $sql = "SELECT * FROM ".$table;
    $query = $db->prepare($sql);

    $query->execute();

    $db = null;

    if(SHOW_DB_MSG){
        echo "Data retrieved successfully</br>";
        echo var_dump($query->fetchAll());
    }

    return $query->fetchAll();
}







?>