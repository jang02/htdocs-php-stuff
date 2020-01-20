<?php

require("Database/database.php");

echo "<table class=\"table\">
    <tr>
        <th>uuid</th>
        <th>user</th>
        <th>kills</th>
        <th>deaths</th>
        <th>balance</th>
        <th>blocksbroken</th>
        <th>blocksplaced</th>
        <th>mobskilled</th>
    </tr>";

if(isset($_POST["user"]) && isset($_POST["table"])){
    if($_POST["table"] !== "" && $_POST["user"] == ""){
        $data = showAll($_POST["table"]);

        foreach ($data as $row) {
            echo "<tr>
        <th>" . $row["UUID"] . "</th>
        <th>" . $row["USER"] . "</th>
        <th>" . $row["KILLS"] . "</th>
        <th>" . $row["DEATHS"] . "</th>
        <th>" . $row["BALANCE"] . "</th>
        <th>" . $row["BLOCKSBROKEN"] . "</th>
        <th>" . $row["BLOCKSPLACED"] . "</th>
        <th>" . $row["MOBSKILLED"] . "</th>
        </tr>";
        }
    }
    elseif($_POST["user"] == "" || $_POST["table"] == ""){
        echo "enter username & select table";
    }

    else{
        $data = showUser($_POST["user"], $_POST["table"]);

        foreach ($data as $row) {
            echo "<tr>
        <th>" . $row["UUID"] . "</th>
        <th>" . $row["USER"] . "</th>
        <th>" . $row["KILLS"] . "</th>
        <th>" . $row["DEATHS"] . "</th>
        <th>" . $row["BALANCE"] . "</th>
        <th>" . $row["BLOCKSBROKEN"] . "</th>
        <th>" . $row["BLOCKSPLACED"] . "</th>
        <th>" . $row["MOBSKILLED"] . "</th>
        </tr>";
        }
    }
}
?>
