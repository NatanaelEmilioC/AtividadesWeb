<?php

//configuração
$database = "";

$dbuser = "root";
$dbpassword = "";
$dbhost = "127.0.0.1";
//function MongoConnect($username, $password, $database, $host) {
//    $con = new Mongo("mongodb://{$username}:{$password}@{$host}"); // Connect to Mongo Server
//    $db = $con->selectDB($database); // Connect to Database
//}
$strConn = "mysql:host=$dbhost;dbname=$database";

$connection = new PDO($strConn, $dbuser, $dbpassword);

var_dump($connection);