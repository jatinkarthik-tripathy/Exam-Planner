<?php
$con=mysqli_connect("localhost","root","","exam_planner");
if (isset($_POST["sub"])){
    $nm = $_POST["usrnm"];
    $query = "select password from login_details where username=?";
    $stmt = mysqli_prepare($con, $query) or die(mysqli_error($conn));
    mysqli_stmt_bind_param($stmt, 's', $nm);
    mysqli_stmt_execute($stmt);
    // $result = mysqli_query($con, $sql);
    $result = mysqli_stmt_get_result($stmt);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            if($_POST["pwd"]==$row["password"]){
                ob_start();
                echo $_POST["pwd"];
                header("Location:http://localhost/exam%20planner/html/sidebar.html");
                ob_end_flush();
                die();
            }
        }
    }
}
?>