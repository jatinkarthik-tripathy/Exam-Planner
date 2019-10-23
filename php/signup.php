<?php

$con=mysqli_connect("localhost","root","","exam_planner");
if (isset($_POST["subS"])){
    $query = "insert into login_details values(?, ?)";
    $stmt = mysqli_prepare($con, $query) or die(mysqli_error($conn));
    mysqli_stmt_bind_param($stmt, 'ss', $_POST["usrnmS"], $_POST["pwdS"]);
    mysqli_stmt_execute($stmt);  
    session_start(); 
    $_SESSION["name"] = $_POST["usrnmS"]; 
    ob_start();
    header("Location:http://localhost/exam%20planner/html/sidebar.html");
    ob_end_flush();
    die();
}







