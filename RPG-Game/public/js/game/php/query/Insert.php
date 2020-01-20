<?php
/**
 * Created by Nick on 19 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */


require_once "../Connection.php";

$values = getValues(["table", "columns", "values"], ["table", "columns", "values"]);

if (isset($_POST["token"])) {
    if ($_POST["token"] == $_SESSION["token"]) {
        if (isValid($values)) {
            echo "Query has banned character";
        }

        echo json_encode(sendQuery(sprintf("INSERT INTO `%s` (%s) VALUES (%s)", $values[0], $values[1], $values[2]))->fetchAll());
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