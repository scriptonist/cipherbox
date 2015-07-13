<?php require("connectDB.php");?>
	




<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
		<title>CipherBox</title>
		<link href="../css/bootstrap.min.css" rel="stylesheet"/>
		<link href="../css/tunes.css" rel="stylesheet"/>
        <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz' rel='stylesheet' type='text/css'>
        <link rel="shortcut icon" href="../images/icons/computer-57-20369.png">
		<!--SCRIPT DEPENDENCIES-->
		<script src="../js/jquery.js"></script>
		<script src="../js/bootstrap.min.js"></script>
		<script src="../js/ceasar.js"></script>

		
		<!--SCRIPT DEPENDENCIES-->
		
	</head>
<body >
<nav class="navbar navbar-inverse navbar-postion-fixed">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-elements">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			</button>
			<!--Brand Icon -->
			<a href="../index.html"  class="navbar-brand"><div id="ciphimgeadj" ><img id="ciphimage" src="../images/banner2.jpg"/></div></a>

		</div><!--Navbar_Header-->
		<div class="collapse navbar-collapse" id="navbar-elements">
			<ul class="nav navbar-nav">
				<li><a href="../index.html">Home</a></li>
				      <!--DROPDOWN START-->
                    <li class="dropdown nav-links-custom">
                        <a class="dropdown-toggle hvr-underline-from-center" data-toggle="dropdown" role="button" aria-expanded="false" href="#">Ciphers <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li ><a href="../pages/ceasar.html" class="hvr-curl-top-right">Ceasar Cipher</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="../pages/rail_fence.html" class="hvr-curl-top-right">Rail Fence Cipher</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="../pages/atbash.html" class="hvr-curl-top-right">Atbash Cipher</a>
                            </li>
                            <li class="divider">
                            </li>
                            <li>
                               <a href="../pages/simple-substitution.html" class="hvr-curl-top-right">Simple-Substitution-Cipher</a> 
                            </li>
                        </ul>

                    </li>
                    <!--DROPDOWN END-->
				<li><a href="#">About</a></li>
			</ul>
		</div>
	</div>
</nav>	<!--Navbar End-->


<!--REGISTER PART START-->
<?php
	
$firstname = $lastname = $email =$password=$success="";
	$firstname_error = $lastname_error = $email_error=$password_error=$gen_error="";	
function validate_password($pass)
	{
		$pass_val_er="";
		if(strlen($pass) < 6)
		{
			
			
			$pass_val_er = "Password should have more than 6 Charecters <br>";
			return $pass_val_er;
		}
		return $pass_val_er;
	}
		
	function conv_data($data)
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	function register_user($fname,$lname,$email,$password_sha,&$gen_error,&$success,$connection)
	{
		
		
		try{
		$sql_statement = $connection->prepare("INSERT INTO users (firstname,lastname,email,password) VALUES(:firstname,:lastname,:email,:password)");
		$sql_statement->bindParam(':firstname',$fname);
		$sql_statement->bindParam(':lastname',$lname);
		$sql_statement->bindParam(':email',$email);
		$sql_statement->bindParam(':password',$password_sha);
		$sql_statement->execute();
		$success = "User Registration Was SuccessFull !";
			}
		catch(PDOException $e){
			$gen_error = $gen_error. "Fatal Error ! User Registration Failed , Your Email may be you Already registered :(";
			
		
			}
		}
		
	
	
	$firstname = $lastname = $email =$password="";
	$firstname_error = $lastname_error = $email_error=$password_error=$gen_error=$success="";
	if($_SERVER["REQUEST_METHOD"]=="POST")
	{
		if(empty($_POST["firstname"]))
		{
			$firstname_error	="<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>FirstName is Required !<br>";
		}
		else{
		$firstname = conv_data($_POST["firstname"]);
		}
		if (!preg_match("/^[a-zA-Z ]*$/",$firstname)) {
  $firstname_error = "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Only letters and white space allowed";
		}
		if(empty($_POST["lastname"]))
		{
			$lastname_error	="<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>LastName is Required !<br>";
		}
		else{
		$lastname = conv_data($_POST["lastname"]);
		}
		if (!preg_match("/^[a-zA-Z ]*$/",$lastname)) {
  		$lastname_error = "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Only letters and white space allowed";
		}
		if(empty($_POST["email"]))
		{
			$email_error	="<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Email Required !<br>";
		}
		else{
		$email = conv_data($_POST["email"]);
		}
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Invalid email format";
    }
		if(empty($_POST["password"]) || empty($_POST["confirm-password"]))
		{
			$password_error = "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Cannot Continue Without a Password :(<br>";
		}
		
		else{
			if($_POST["password"] == $_POST["confirm-password"]){
			if(empty(validate_password($_POST["password"])))
			{
			$password = $_POST["password"];
			$password_sha = sha1($password);
			register_user($firstname,$lastname,$email,$password_sha,$gen_error,$success,$connection);
			
			}
			else
			{
				$ret_er = validate_password($password);
				$password_error = $password_error.$ret_er;
			}
	
		}
			else
			{
				$password_error = $password_error."<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>"."Passwords Donot Match !";
			}
		}
	}
	

?>

<br>
<br>
<div class="container">
	<div class="panel panel-primary">
	<div class="panel-heading"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <span class='panel-title' >Register</span></div>
	<div class="panel-body">
		
	<form class="form"  method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		
		<div class="form-group">
		
			<label for="firstname" class="control-label">
				Firstname :
			</label>
			<div>
				<input type="text" value="<?php echo $firstname?>" name = "firstname" class="col-sm-6 form-control" id="firstname" placeholder="FirstName">
				<span class="text-danger bg-danger"><?php echo $firstname_error?></span>
			</div>

		</div>
		<div class="form-group">
			<label for="lastname"  class="control-label">
				Lastname :
			</label>
			<div>
				<input type="text" name="lastname" value="<?php echo $lastname?>" class="col-sm-6 form-control" id="lastname" placeholder="LastName">
				<span class="text-danger bg-danger"><?php echo $lastname_error?></span>
			</div>
		</div>
		<div class="form-group">
			<label for="email"  class="control-label">
				Email :
			</label>
			<div>
				<input type="email" name="email" class="col-sm-6 form-control" value="<?php echo $email?>" id="email" placeholder="youraddress@someprovider.com">
				<span class="text-danger bg-danger"><?php echo $email_error?></span>
			</div>
		</div>
		<div class="form-group">
			<label for="password"  class="control-label">
				Password :
			</label>
			<div>
				<input name="password" type="password" class="col-sm-6 form-control" id="password" placeholder="Choose a strong Password">
			</div>
			
		</div>
		<div class="form-group">
			<label for="confirm_password"  class="control-label">
				Confirm Password :
			</label>
			<div>
				<input name="confirm-password" type="password" class="col-sm-6 form-control" id="confirm-password" placeholder=" Confirm Password">
				<span class="text-danger bg-danger"><?php echo $password_error?></span>
			</div>
		</div>
		<br><br>
		<div class="form-group">
		<button type="submit" onClick = "form-validate()" class="btn btn-primary"><span class='glyphicon glyphicon-flag' aria-hidden='true'></span> Register</button>
	<br><br>
	<?php	
		if(!(empty($gen_error)))
		echo "<div class='alert alert-danger alert-dismissable'>
			<button type = 'button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
			<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> ".$gen_error.
		"</div>
		</div>"
	?>
	</form>
	<?php 
		if(!(empty($success)))
			echo "<br><span class='alert alert-info'><span class='glyphicon glyphicon-thumbs-up' aria-hidden='true'></span>   	".$success." Now You can Login From<a href='../index.html' class='alert-link'> Home Page</a> </span></div></div>"
	?>
		
</div>
		
		</div>
		
<!--panel--></div>
	</div>












</body>
	

</html>