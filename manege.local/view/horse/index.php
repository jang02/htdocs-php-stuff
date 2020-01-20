<h1>Paarden</h1>
<table>
    <tr>
        <th>ID</th>
        <th>Type</th>
        <th>Naam</th>
        <th>Ras</th>
        <th>schofthoogte</th>
        <th></th>
    </tr>
    <?php
    foreach ($data["horse"] as $horse) {

        echo '<tr><td>'.$horse["HorseID"].'</td><td>'.$horse["type"].'</td><td>'.$horse["HorseName"].'</td>
<td>'.$horse["ras"].'</td><td>'.$horse["schofthoogte"].'</td><td><a href="edit"><i class="fas fa-pen"></i></a> <a href="delete"><i class="fas fa-trash"></i></a></td></tr>';





    }

    ?>
</table>