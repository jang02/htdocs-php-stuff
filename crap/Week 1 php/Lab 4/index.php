<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php

    define("game_id", "monopoly");
    define("want_to_play", true);
    define("integer", 100);

    $array = [
        "Je wilt yahtzee spelen want je hebt tussen de 15 en 30 minuten de tijd.",
        "Je wilt yahtzee spelen want dat vind je gewoon leuk.",
        "Je wilt geen yahtzee spelen want je wilt meer dan 100x met een dobbelsteen gooien.",
        "Je wilt geen yahtzee spelen want je wilt minder dan 100 punten halen.",
        "Je wilt monopoly spelen want je hebt aan 1 spelletje genoeg.",
        "Je wilt monopoly spelen want je houd ervan iedereen blut te maken.",
        "Je wilt monopoly niet spelen want je hebt geen zin in een spel van 2 uur.",
        "Je wilt monopoly niet spelen want je houd niet van hotels.",
        "Je wilt schaken want je vindt zwart en wit leuk.",
        "Je wilt schaken want je denkt slimmer dan mij te zijn",
        "Je wilt echt niet schaken",
        "Je wilt gewoon niet schaken"
        ];

    if (game_id === "schaken" or game_id === "yahtzee" or game_id === "monopoly") {
        if (game_id === "yahtzee") {
            if(want_to_play === true) {
                if (integer > 15 and integer < 30){
                    echo $array[0];
                }
                else {
                    echo $array[1];
                }
            }
            else {
                if (integer > 100) {
                    echo $array[2];
                }
                elseif (integer <= 100) {
                    echo $array[3];
                }
            }
        }
        elseif (game_id === "monopoly") {
            if(want_to_play === true) {
                if (integer == 1){
                    echo $array[4];
                }
                elseif(integer > 1) {
                    echo $array[5];
                }
            }
            else {
                if (integer == 2 or integer > 120) {
                    echo $array[6];
                }
                else {
                    echo $array[7];
                }
            }
        }
        else {
            if(want_to_play === true) {
                if (integer == 2){
                    echo $array[8];
                }
                elseif (integer <> 2) {
                    echo $array[9];
                }
            }
            else {
                if (integer == -1) {
                    echo $array[10];
                }
                else {
                    echo $array[11];
                }
            }
        }
    }
    else {
        echo "Error, Je moet schaken, yahtzee of monopoly invoeren!";
    }

?>
</body>
</html>