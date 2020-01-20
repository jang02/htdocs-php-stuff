<?php
/**
 * Created by Nick on 18 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

require_once "init/required.php";

// Functie om een database verbinding op te zetten. Hij geeft het database object terug
function openDatabaseConnection()
{
    $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);

    $db = new PDO(DB_TYPE . ':host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET, DB_USER, DB_PASS, $options);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $db;
}

// Functie om gemakkelijk queries te verzenden
function sendQuery($query) {
    $connection = openDatabaseConnection();

    $stmt = $connection->prepare($query);
    $stmt->execute();

    $connection = null;

    return $stmt;
}

function getValues($fields, $required) {
    $values = [];
    foreach ($fields as $value) {
        if (in_array($value, $required) && !isset($_POST[$value])) {
            return false;
        }
        $values[] = isset($_POST[$value]) ?  $_POST[$value] : "";
    }

    return $values;
}