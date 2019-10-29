<?php
$con=mysqli_connect("localhost","root","","exam_planner");
$query = "select * from exam_details where user=? order by idx";
$stmt = mysqli_prepare($con, $query) or die(mysqli_error($con));
mysqli_stmt_bind_param($stmt, 's', $_GET["usr"]);
mysqli_stmt_execute($stmt);
$res = mysqli_stmt_get_result ($stmt);
$arr = array();
if (mysqli_num_rows($res)) {
    while($row = mysqli_fetch_assoc($res)) {
        array_push($arr, array($row["name"], $row["date"], $row["time"]));
    }
}
echo json_encode($arr); 
