<?php

function getAllPlanned(){
    $db = openDatabaseConnection();

    $sql = "SELECT id, start_time, end_time, RiderName, HorseName 
FROM planning 
  INNER JOIN riders on RiderID = Rider_id 
  INNER JOIN horses on HorseID = Horse_id 
ORDER BY start_time ASC";
    $query = $db->prepare($sql);
    $query->execute();

    $db = null;

    return $query->fetchAll();
}
