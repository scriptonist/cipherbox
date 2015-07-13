<?php
$server = "localhost";
$username = "root";
$password = "segate";

try{
	$connection = new PDO ("mysql:host=$server;dbname=cipherbox",$username,$password);
	// set the PDO error mode to exception
    
	$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	
}
catch(PDOException $obj)
{
	echo "Fatal Error! Connection Failed :(<br>   ".$obj->getMessage();
	die();
}


?>