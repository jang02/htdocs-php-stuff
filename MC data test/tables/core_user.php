<?php

require("Database/database.php");

echo "<table class=\"table\">
    <tr>
        <th>rowid</th>
        <th>time</th>
        <th>user</th>
        <th>uuid</th>
    </tr>";

if(isset($_POST["user"]) && isset($_POST["table"])){
    if($_POST["table"] !== "" && $_POST["user"] == ""){

        $data = showAll($_POST["table"]);

        foreach ($data as $row) {
            echo "<tr>
        <th>" . $row["rowid"] . "</th>
        <th>" . $row["time"] . "</th>
        <th>" . $row["user"] . "</th>
        <th>" . $row["uuid"] . "</th></tr>";
        }
    }
    elseif($_POST["user"] == "" || $_POST["table"] == ""){
        echo "enter username & select table";
    }

    else{
        $data = showUser($_POST["user"], $_POST["table"]);

        foreach ($data as $row) {
            echo "<tr>
        <th>" . $row["rowid"] . "</th>
        <th>" . $row["time"] . "</th>
        <th>" . $row["user"] . "</th>
        <th>" . $row["uuid"] . "</th></tr>";
        }
    }
}


?>

