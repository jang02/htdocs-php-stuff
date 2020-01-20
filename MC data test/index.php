<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
<form method="post" action="">
    <input type="text" name="user" placeholder="username" value="<?php if(isset($_POST["user"])){echo $_POST["user"];}?>">
    <select name="table">
        <option value="">Select an option</option>
        <option <?php if(isset($_POST["table"])){if($_POST["table"] == "culturestats"){ echo "selected";}} ?> value="culturestats">Stats</option>
        <option <?php if(isset($_POST["table"])){if($_POST["table"] == "core_user"){ echo "selected";}} ?> value="core_user">Core</option>
    </select>
    <input type="submit">
</form>

<?php

    if(isset($_POST["table"])){
        if($_POST["table"] == "core_user"){
            include("tables/core_user.php");
        }
        elseif($_POST["table"] == "culturestats"){
            include("tables/culturestats.php");
        }
    }


    ?>
</table>
</body>
</html>
