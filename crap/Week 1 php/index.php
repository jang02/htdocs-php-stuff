<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link rel="stylesheet" href="index.css">

</head>
<body>
    <div id="container">
        <?php

        include('header/header.php');
        include('menu/menu.php');

        ?>

        <div id="lab1">
            <?php
                include('Lab 1/index.php');
            ?>
        </div>
        <div id="lab2">
            <?php
            include('Lab 3/index.php');
            ?>
        </div>
        <div id="lab4">
            <?php
            include('Lab 4/index.php');
            ?>
        </div>
        <div id="weekopdracht">
            <?php
            include('Weekopdracht/index.php');
            ?>
        </div>

        <?php

        include('footer/footer.php')

        ?>
    </div>
<script language="JavaScript">
    for (let i = 0; i < document.getElementsByClassName("opdrachten").length; i++) {
        let element = document.getElementsByClassName("opdrachten")[i];

        let id = element.id.toLowerCase().replace("_", "");

        element.onclick = function () {

            let opdracht = document.getElementById(id);

            console.log(id);

            if (opdracht.style.display.length === 0 || opdracht.style.display === "none") {
                if (document.getElementById("lab1").style.display || document.getElementById("lab2").style.display ||
                    document.getElementById("lab4").style.display || document.getElementById("weekopdracht").style.display === "block") {
                    document.getElementById("lab1").style.display = null;
                    document.getElementById("lab2").style.display = null;
                    document.getElementById("lab4").style.display = null;
                    document.getElementById("weekopdracht").style.display = null;
                }
                opdracht.style.display = "block";

            } else {
                opdracht.style.display = null;
            }

        }
    }


</script>
</body>
</html>