<?php

$con=mysqli_connect("localhost","root","","exam_planner");
$query = "select * from entries where idx=?";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($conn));
mysqli_stmt_bind_param($stmt, 's', $_GET["idx"]);
mysqli_stmt_execute($stmt);
$res = mysqli_stmt_get_result ($stmt);
$arr = array();
if (mysqli_num_rows($res)) {
    while($row = mysqli_fetch_assoc($res)) {
        $arr = array($row["idx"], $row["subject"], $row["day"], $row["time"], $row["notes"]);
    }
}
// echo $arr;
echo json_encode($arr); 