<?php
$con=mysqli_connect("localhost","root","","exam_planner");
$query = "select * from entries order by 'idx'";
$res = mysqli_query($con, $query);
$arr = array();
if (mysqli_num_rows($res)) {
    // output data of each row
    while($row = mysqli_fetch_assoc($res)) {
        array_push($arr, array($row["subject"], $row["day"], $row["time"], $row["notes"]));
    }
}
echo json_encode($arr); 