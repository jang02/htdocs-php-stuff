<form class="box" method="post" action="<?= URL ?>login/finalLogin"">
<h1>Login</h1>
    <?php
    $username = isset($_POST['username']) ? $_POST['username'] : "";
    $email =  isset($_POST['email']) ? $_POST['email'] : "";

    include('errors.php');

    if (isset($_SESSION['username'])) {
        $_SESSION['msg'] = "You are already logged in";

        header("Location: " . URL . "game/index");
    }

    ?>
<!-- notification message -->
<?php if (isset($_SESSION['msg'])) :
    echo "<div style='margin-top: 15px;' class=\"alert alert-success\" role=\"alert\">". $_SESSION['msg'] ."</div>";

    unset($_SESSION['msg']);

endif
?>
    <div class="input-group">
        <input type="text" name="username" placeholder="Username">
    </div>
    <div class="input-group">
        <input type="password" name="password" placeholder="Password">
    </div>
    <div class="input-group">
        <button type="submit" class="btn" name="login_user">Login</button>
    </div>
    <p>
        Not yet registered? <a href="<?= URL ?>login/register">Register</a>!
    </p>
</form>
