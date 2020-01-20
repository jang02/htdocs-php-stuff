<?php
/**
 * Created by Nick on 18 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

require_once "Connection.php";


if (isset($_POST["token"])) {
    if ($_POST["token"] == $_SESSION["token"]) {
        if (isValid($values)) {
            echo "Query has banned character";
        }
        echo json_encode(sendQuery($_POST["query"])->fetchAll());
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