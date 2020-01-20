<?php

if (!isset($_SESSION['username'])) {
    $_SESSION['msg'] = "You must log in first";

    header("Location: " . URL . "login/login");
}
if (isset($_GET['logout'])) {
    session_destroy();
    unset($_SESSION['username']);

    header("Location: " . URL . "login/login");
}
?>
<!-- notification message -->
<?php if (isset($_SESSION['msg'])) :
    echo "<div style='margin-top: 15px;' class=\"alert alert-success\" role=\"alert\">". $_SESSION['msg'] ."</div>";

    unset($_SESSION['msg']);

    endif
?>
<div id="header">
    <!-- logged in user information -->
    <?php  if (isset($_SESSION['username'])) : ?>
    <div id="welcome">
        <p> Welcome, <strong><?php echo $_SESSION['username']; ?></strong></p>
    </div>
    <div id="logout">
        <p> <a href="<?= URL ?>login/logout" style="color: red;">logout</a> </p>
    </div>

    <?php endif ?>
</div>

<div class="content">

        <h1>GAME TEST</h1>
        <div id="game">
            <canvas id="canvas" width="1280" height="720">
            </canvas>

            <script src="<?= URL ?>public/js/game/PrototypeChanges.js" id="prototypeChanges"></script>
            <script src="<?= URL ?>public/js/game/Start.js" id="main"></script>
        </div>

</div>
<script>
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove();
        });
    }, 2000);
</script>
