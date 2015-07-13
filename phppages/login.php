<?php
require("connectDB.php");
header('Content-type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
echo '<response>';
	$password = sha1($_POST['input_password']);
	$email = $_POST['input_email'];
try{
		$query = $connection->prepare("SELECT firstname FROM users WHERE email=:email AND password=:password;");
	$query->bindParam(':email',$email);
	$query->bindParam(':password',$password);
	$query->execute();
	if($query->rowCount() >0)
	{
	$result = $query->fetch(PDO::FETCH_ASSOC);
	
	session_start();
		echo "Logged In As : ".$result['firstname'];
		
		$_SESSION['username'] = $result['firstname'];
	}
	else
	{
		echo "0";
	}
		
	
	
}
catch(PDOException $e)
{
	echo "Error";
}
echo '</response>';
?>