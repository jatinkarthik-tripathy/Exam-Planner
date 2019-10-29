<?php

$con=mysqli_connect("localhost","root","","exam_planner");
$query = "insert into exam_details values(?, ?, ?, ?, ?)";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($con));
mysqli_stmt_bind_param($stmt, 'sssss', $_GET['idx'], $_GET["name"], $_GET["date"], $_GET["time"], $_GET["usr"]);
mysqli_stmt_execute($stmt);