<?php
/**
 * Created by Nick on 19 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */


require_once "../Connection.php";

$fields = [
    "selector",
    "table",
    "where"
];

$values = [];
foreach ($fields as $value) {
    $values[] = isset($_POST[$value]) ?  $_POST[$value] : "";
}

if (isset($_POST["token"])) {
    if ($_POST["token"] == $_SESSION["token"]) {
        if (isValid($values)) {
            echo "Query has banned character";
        }

        echo json_encode(sendQuery(sprintf("SELECT %s FROM `%s` %s", $values[0], $values[1], $values[2]))->fetchAll());
    }
    else echo "Invalid token.";
}
else echo "Invalid token.";

function isValid($array) {
    foreach ($array as $value) {
        if (strpos($value, ";")) {
            return false;
        }
    }
    return true;
}