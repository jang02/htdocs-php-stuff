<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="../Weekopdracht/index.css">
    <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet">
</head>
<body>

<?php

$hour = date("H:i");

$end = "<br>Het is nu $hour</h1></div>";

if ($hour >= 6 and $hour < 12) {
    echo "<div class='morning' id='cont'><h1 id='message'>Goede morgen! $end";
}
elseif ($hour >= 12 and $hour < 18) {
    echo "<div class='middag' id='cont'><h1 id='message'>Goede middag! $end";
}
elseif ($hour >= 18 and $hour <= 23) {
    echo "<div class='avond' id='cont'><h1 id='message'>Goede avond! $end";
}
elseif ($hour >= 00 and $hour < 6) {
    echo "<div class='nacht' id='cont'><h1 id='message'>Goede nacht! $end";
}


?>
<script language="JavaScript">
    function start() {
        var time = 0;
        let timer = setInterval(function(){
            var h = new Date();
            var m = new Date();

            if (h.getHours() >= 6 && h.getHours() < 12) {
                document.getElementById('message').innerHTML = "Goede morgen!<br>Het is nu " + h.getHours() + ":" + m.getMinutes();
                document.getElementById('cont').style.backgroundImage = 'url("Weekopdracht/morning.png")';
                if (h.getHours() <= 9){
                    document.getElementById('message').innerHTML = "Goede morgen!<br>Het is nu 0" + h.getHours() + ":" + m.getMinutes();
                }
                else if (h.getHours() <= 9 && m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede morgen!<br>Het is nu 0" + h.getHours() + ":0" + m.getMinutes();
                }
                else if (m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede morgen!<br>Het is nu " + h.getHours() + ":0" + m.getMinutes();
                }
            }
            else if (h.getHours() >= 12 && h.getHours() < 18) {
                document.getElementById('message').innerHTML = "Goede middag!<br>Het is nu " + h.getHours() + ":" + m.getMinutes();
                document.getElementById('cont').style.backgroundImage = 'url("Weekopdracht/afternoon.png")';
                if (h.getHours() <= 9){
                    document.getElementById('message').innerHTML = "Goede middag!<br>Het is nu 0" + h.getHours() + ":" + m.getMinutes();
                }
                else if (h.getHours() <= 9 && m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede middag!<br>Het is nu 0" + h.getHours() + ":0" + m.getMinutes();
                }
                else if (m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede middag!<br>Het is nu " + h.getHours() + ":0" + m.getMinutes();
                }
            }
            else if (h.getHours() >= 18 && h.getHours() <= 23) {
                document.getElementById('message').innerHTML = "Goede avond!<br>Het is nu " + h.getHours() + ":" + m.getMinutes();
                document.getElementById('cont').style.backgroundImage = 'url("Weekopdracht/evening.png")';
                if (h.getHours() <= 9){
                    document.getElementById('message').innerHTML = "Goede avond!<br>Het is nu 0" + h.getHours() + ":" + m.getMinutes();
                }
                else if (h.getHours() <= 9 && m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede avond!<br>Het is nu 0" + h.getHours() + ":0" + m.getMinutes();
                }
                else if (m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede avond!<br>Het is nu " + h.getHours() + ":0" + m.getMinutes();
                }
            }
            else if (h.getHours() >= 0 && h.getHours() < 6) {
                document.getElementById('message').innerHTML = "Goede nacht!<br>Het is nu " + h.getHours() + ":" + m.getMinutes();
                document.getElementById('cont').style.backgroundImage = 'url("Weekopdracht/night.png")';
                if (h.getHours() <= 9){
                    document.getElementById('message').innerHTML = "Goede nacht!<br>Het is nu 0" + h.getHours() + ":" + m.getMinutes();
                }
                else if (h.getHours() <= 9 && m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede nacht!<br>Het is nu 0" + h.getHours() + ":0" + m.getMinutes();
                }
                else if (m.getMinutes() <= 9){
                    document.getElementById('message').innerHTML = "Goede nacht!<br>Het is nu " + h.getHours() + ":0" + m.getMinutes();
                }
            }

            time++;
        }, 1000);
    }
    start();
</script>
</body>
</html>