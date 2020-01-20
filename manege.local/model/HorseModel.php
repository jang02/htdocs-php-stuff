<?php

function getAllHorses(){
    $db = openDatabaseConnection();

    $sql = "SELECT * FROM `horses`";
    $query = $db->prepare($sql);
    $query->execute();

    $db = null;

    return $query->fetchAll();
}

function ValidateData($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function createHorse($type, $name, $ras, $schofthoogte){
    try {
        $conn=openDatabaseConnection();

        $stmt = $conn->prepare("INSERT INTO `horses` (HorseID, type, HorseName, ras, schofthoogte) VALUES (NULL, :type, :name, :ras, :schofthoogte)");
        $stmt->bindParam(":type", $type);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":ras", $ras);
        $stmt->bindParam(":schofthoogte", $schofthoogte);
        $stmt->execute();

    }
    catch(PDOException $e){

        echo "Connection failed: " . $e->getMessage();
    }

    $conn = null;

}


?>