<?php

$con=mysqli_connect("localhost","root","","exam_planner");
$query = "insert into entries values(?, ?, ?, ?, ?)";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($conn));
mysqli_stmt_bind_param($stmt, 'sssss', $_GET["idx"], $_GET["sub"], $_GET["day"], $_GET["time"], $_GET["notes"]);
mysqli_stmt_execute($stmt);