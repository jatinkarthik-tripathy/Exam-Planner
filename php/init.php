<?php
$con=mysqli_connect("localhost","root","","exam_planner");
$arr1 = array();
$arr2 = array();
$query = "select idx from entries where user=? order by 'idx'";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($con));
mysqli_stmt_bind_param($stmt, 's', $_GET["usr"]);
mysqli_stmt_execute($stmt);
$res = mysqli_stmt_get_result ($stmt);
if (mysqli_num_rows($res)) {
    while($row = mysqli_fetch_assoc($res)) {
        array_push($arr1, $row["idx"]);
    }
}

$query = "select idx from exam_details where user=? order by 'idx'";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($con));
mysqli_stmt_bind_param($stmt, 's', $_GET["usr"]);
mysqli_stmt_execute($stmt);
$res = mysqli_stmt_get_result ($stmt);
if (mysqli_num_rows($res)) {
    while($row = mysqli_fetch_assoc($res)) {
        array_push($arr2, $row["idx"]);
    }
}
$arr = array($arr1, $arr2);
echo json_encode($arr); 
