<?php
/**
 * Created by Nick on 18 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

require_once "init/required.php";

if (!isset($_SESSION["token"])) {
    $_SESSION["token"] = $_POST["token"];
}
echo $_SESSION["token"];