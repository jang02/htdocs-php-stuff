
	<h1>Persoon wijzigen</h1>
	<form name="update" method="post" action="<?=URL?>employee/update">
	    <input type="hidden" name="id" value="<?php echo $id ?>"/>
	    <!--  Bouw hier de rest van je formulier   -->

        <div class="form-group">
            <label class="col-sm-6" for="name" style="margin-top: 5px">Naam <span class="error">* </span></label>
            <div class="col-sm-5">
                <input required type="text" class="form-control" id="name" name="name" value="<?php echo $name ?>">
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-6" for="age" style="margin-top: 5px">Leeftijd <span class="error">* </span></label>
            <div class="col-sm-2">
                <input required type="number" class="form-control" id="age" name="age" min="0" value="<?php echo $age ?>">
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Bewerken</button>
	</form>