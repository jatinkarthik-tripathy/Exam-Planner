<?php
echo "inside php";
session_start();
$_SESSION["name"] = NULL;
header("Location:http://localhost/exam%20planner/html/flex_test.html");
