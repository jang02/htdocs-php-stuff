<h1>Voeg een medewerker toe</h1>
<form name="create" method="post" action="<?=URL?>employee/store">
	<!-- bouw hier je formulier -->

    <div class="form-group">
        <label class="col-sm-6" for="name" style="margin-top: 5px">Naam <span class="error">* </span></label>
        <div class="col-sm-5">
            <input required type="text" class="form-control" id="name" name="name">
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-6" for="age" style="margin-top: 5px">Leeftijd <span class="error">* </span></label>
        <div class="col-sm-2">
            <input required type="number" class="form-control" id="age" name="age" min="0">
        </div>
    </div>
    <button class="btn btn-primary" type="submit">Toevoegen</button>
</form>