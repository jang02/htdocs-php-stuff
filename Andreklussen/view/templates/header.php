<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Manege</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?= URL ?>css/style.css">
</head>
<body>
<div id="container">
    <div id="header">
        
    </div>
    <nav class="navbar navbar-inverse">
        <ul>
            <li><a href="<?= URL ?>Andreklussen/index">Home</a></li>
            <li><a href="<?= URL ?>Andreklussen/contact">Contact</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </nav>
    <div id="alerts">
        <?php
        if (!isset($_SESSION["error"])){
            $_SESSION["error"] = [];
        }

        if (isset($_SESSION["error"])){
            foreach($_SESSION["error"]as $error){
                echo "<div class=\"alert alert-danger\" role=\"alert\">$error</div>";
            }
            unset($_SESSION["error"]);
        }
        if (!isset($_SESSION["success"])){
            $_SESSION["success"] = [];
        }

        if (isset($_SESSION["success"])){
            foreach($_SESSION["success"]as $success){
                echo "<div class=\"alert alert-success\" role=\"alert\">$success</div>";
            }
            unset($_SESSION["success"]);
        }
        ?>
    </div>




