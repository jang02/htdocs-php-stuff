<h1>Overzicht van personen</h1>
<ul>
<?php
    foreach ($data as $employee){

	?>
		<li>
			<span><?php echo $employee['name']?> is <?php echo $employee['age']?> jaar</span>
			<?php
			// de opbouw van de link bepaald welke method in welke controller aangeroepen wordt.
			// het woordje "employee" in de url betekent dat het framework moet zoeken naar een controller genaamd "EmployeeController".
			// Hij maakt van de eerste letter een hoofdletter en plakt er zelf "Controller" achter.
			// Het woordje "update" of "delete" betekent dat hij in deze controller moet zoeken naar een method met deze naam.
			?>
            <a href="<?=URL?>employee/edit/<?php echo $employee['id']?>">Wijzigen</a> <a href="<?=URL?>employee/delete/<?php echo $employee['id']?>">Verwijderen</a>
		</li>
    <?php }?>
</ul>
<?php

var_dump($data);

?>
