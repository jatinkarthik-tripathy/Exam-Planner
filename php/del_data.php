<?php

$con=mysqli_connect("localhost","root","","exam_planner");
$query = "delete from entries where idx=?";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($conn));
mysqli_stmt_bind_param($stmt, 's', $_GET["idx"]);
mysqli_stmt_execute($stmt);
