<?php
include 'connect.php';  

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$membership = $_POST['membership'];


$goals = isset($_POST['goals']) ? $_POST['goals'] : [];
$goals_str = implode(", ", $goals);

$health = $_POST['health'];

$terms = isset($_POST['terms']) ? 1 : 0;  

$query = "INSERT INTO signup_info(
    `full name`, email, phone, dob, gender, membership, goals, health, `terms accepted`
) VALUES (
    '$fullname', '$email', '$phone', '$dob', '$gender', '$membership', '$goals_str', '$health', '$terms'
)";

$run = mysqli_query($con, $query);

if (!$run) {
    echo " Submission failed: " ;
} else {
    echo "<br> Submission successful!";
}
?>
