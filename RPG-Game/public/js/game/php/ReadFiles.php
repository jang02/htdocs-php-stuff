<?php
/**
 * Created by Nick on 18 Jun 2019.
 * No part of this publication may be reproduced, distributed, or transmitted in any form or by any means.
 * Copyright © ImSpooks
 */

$mainDir = $_POST["directory"];

$final = listFolderFiles($mainDir);

echo json_encode($final);

function listFolderFiles($dir, $dirName = null) {
    global $mainDir;

    $directories = [];

    $ffs = scandir($dir);

    unset($ffs[array_search(".", $ffs, true)]);
    unset($ffs[array_search("..", $ffs, true)]);

    if (count($ffs) < 1)
        return [];

    foreach ($ffs as $ff) {
        if (is_dir($dir. "/" .$ff)) {
            foreach (listFolderFiles($dir . "/" . $ff, $dirName == null ? $ff : $dirName . "/" . $ff) as $sff) {
                array_push($directories, $sff);
            }
        }
        else {
            if ($dir != $mainDir) {
                array_push($directories, $dirName . "/" . $ff);
            }
            else {
                array_push($directories, $ff);
            }
        }
    }

    return $directories;
}