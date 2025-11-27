<?php
$host = "localhost";
$username = "root";
$password = "";
$db = "signup_info";
$con = mysqli_connect($host, $username, $password, $db);

if (!$con) {
    echo "Connection failed: " . mysqli_connect_error();
    exit;
}
?>
