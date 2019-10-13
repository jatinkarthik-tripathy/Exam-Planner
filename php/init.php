<?php
$con=mysqli_connect("localhost","root","","exam_planner");
$query = "select idx from entries order by idx";
$res = mysqli_query($con, $query);
$arr = array();
if (mysqli_num_rows($res)) {
    while($row = mysqli_fetch_assoc($res)) {
        array_push($arr, $row["idx"]);
    }
}
echo json_encode($arr); 