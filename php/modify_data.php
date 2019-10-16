<?php

$con=mysqli_connect("localhost","root","","exam_planner");
$query = "update entries set subject=?, day=?, time=?, notes=? where idx=?";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($con));
mysqli_stmt_bind_param($stmt, 'sssss', $_GET["sub"], $_GET["day"], $_GET["time"], $_GET["notes"],  $_GET["idx"]);
mysqli_stmt_execute($stmt);