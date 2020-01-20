<?php

// Functie om een database verbinding op te zetten. Hij geeft het database object terug
function openDatabaseConnection() 
{
	$options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);
	
	$db = new PDO(DB_TYPE . ':host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET, DB_USER, DB_PASS, $options);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	return $db;
}

// Functie om gemakkelijk queries te verzenden
function sendQuery($query) {
    $connection = openDatabaseConnection();

    $stmt = $connection->prepare($query);
    $stmt->execute();
    
    $connection = null;
    
    return $stmt;
}

// De render functie ontvangt het gevraagde bestandsnaam en heeft een data array als niet verplichte variabele
// Allereerst wordt er door de data array heen gelopen en wordt elk item omgezet in een variabele. Bijvoorbeeld: $data["voornaam"] wordt in de view beschikbaar als $voornaam
// Daarna worden er 3 bestanden ingeladen. De templates/header.php, jouw gewenste pagina en de templates/footer.php. Merk op dat .php hier al staat en je die dus niet mee hoeft te geven.

$headerSet = false;
$footerSet = false;

function render($filename, $data = null)
{
	if ($data) {

		foreach($data as $key => $value) {
			$$key = $value;
		}
	}

    global $headerSet, $footerSet;

    if ($headerSet == false) {
        $headerSet = true;
        require(ROOT . 'view/templates/header.php');
    }

	require(ROOT . 'view/' . $filename . '.php');

    if ($footerSet == false) {
        $footerSet = true;
        require(ROOT . 'view/templates/footer.php');
    }
}