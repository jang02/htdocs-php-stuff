<form class="box" method="post" action="finalRegister">
    <h1>Register</h1>
    <?php

        $username = isset($_POST['username']) ? $_POST['username'] : "";
        $email =  isset($_POST['email']) ? $_POST['email'] : "";

    include('errors.php');

    if (isset($_SESSION['username'])) {
        $_SESSION['msg'] = "You are already logged in";

        echo "test";

        header("Location: " . URL . "game/index");
    }

    ?>
    <div class="input-group">
        <input type="text" name="username" placeholder="Username" value="<?php echo $username; ?>">
    </div>
    <div class="input-group">
        <input type="email" name="email" placeholder="example@gmail.com" value="<?php echo $email; ?>">
    </div>
    <div class="input-group">
        <input type="password" placeholder="Password" name="password_1">
    </div>
    <div class="input-group">
        <input type="password" placeholder="Confirm Password" name="password_2">
    </div>
    <div class="input-group">
        <button type="submit" class="btn" name="reg_user">Register</button>
    </div>
    <p>
        Already registered? <a href="login">Log in</a>!
    </p>
</form>