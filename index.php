<?php require("./phppages/connectDB.php");
	
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>CipherBox</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/tunes.css" rel="stylesheet" />

    <link href="css/hover-min.css" rel="stylesheet" media="all">
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz' rel='stylesheet' type='text/css'>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link rel="shortcut icon" href="../images/icons/computer-57-20369.png">
    <!--SCRIPT DEPENDENCIES-->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/mainPage.js"></script>
    <script src="js/xml.js"></script>

    <!--SCRIPT DEPENDENCIES-->

</head>

<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
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
                <a href="#" class="navbar-brand">
                    <div id="ciphimgeadj"><img id="ciphimage" src="images/banner2.jpg" />
                    </div>
                </a>

            </div>
            <!--Navbar_Header-->
            <div class="collapse navbar-collapse " id="navbar-elements">
                <ul class="nav navbar-nav  ">
                    <li class="hvr-underline-from-center nav-links-custom "><a href="./index.html"  >Home</a>
                    </li>
                    <!--DROPDOWN START-->
                    <li class="dropdown nav-links-custom">
                        <a class="dropdown-toggle hvr-underline-from-center hvr-bouce-in" data-toggle="dropdown" role="button" aria-expanded="false" href="#">Ciphers <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li ><a href="./pages/ceasar.html" class="hvr-curl-top-right">Ceasar Cipher</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="./pages/rail_fence.html" class="hvr-curl-top-right">Rail Fence Cipher</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="/pages/atbash.html" class="hvr-curl-top-right">Atbash Cipher</a>
                            </li>
                            <li class="divider">
                            </li>
                            <li>
                               <a href="./pages/simple-substitution.html" class="hvr-curl-top-right">Simple-Substitution-Cipher</a> 
                            </li>
                        </ul>

                    </li>
                    <!--DROPDOWN--END-->
                    <li class="nav-links-custom"><a href="./phppages/register.php" class="hvr-underline-from-center">Register</a>
                    </li>
                    <li class="nav-links-custom"><a href="#" class="hvr-underline-from-center">About</a>
                    </li>
                 
                </ul>
                 <?php

	session_start();

if(!(isset($_SESSION['username'])))
{
echo '<span class="nav-links-custom"><button type="button" class="btn btn-default navbar-btn pull-right" data-toggle="modal" data-target="#login">
  Login
					</button></span>';
}
else{

	echo '<ul class="nav navbar-nav navbar-right">
        
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'.'<span class="glyphicon glyphicon-user" aria-hidden="true"></span> '.$_SESSION["username"].'<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="./logout.php">Logout</a></li>
          </ul>
        </li>
      </ul>';
}
?>
                
                

            </div>
        </div>
    </nav>
    <!--Navbar End-->
    <div>
        <img src="./images/ciph-violet.jpg" alt="CipherBox Logo" class="img-responsive ">
    </div>
    <div style="margin-top:30px"></div>

    <div id="background-animate">
        <div>
            <div class="container">
                <h1 class="ciph-head">
               What this Website Is All About
           </h1>
                <p class="ciph-cont">
                    The basic aim of this website is to impart basic knowledge about diffrent ciphers and ,The Algorithms used to solve them using simple computer programs.
                </p>
                <h1 class="ciph-head ">Don't Know Cryptography and related stuff ? Not A Problem ,Help is Here !</h1>
                <p class="ciph-cont">
                    In cryptography, a cipher (or cypher) is an algorithm for performing encryption or decryption—a series of well-defined steps that can be followed as a procedure. An alternative, less common term is encipherment. To encipher or encode is to convert information into cipher or code. In non-technical usage, a 'cipher' is the same thing as a 'code'; however, the concepts are distinct in cryptography. In classical cryptography, ciphers were distinguished from codes.
                    <a href="http://en.wikipedia.org/wiki/Cipher">Learn More</a>
                </p>



                <h1 class="ciph-head">
           Ciphers
       </h1>
                <p class="ciph-cont">
                    The Following Ciphers is Currently Avialable.<i>
           <small class="text-alert" >&nbsp &nbsp &nbsp Support For more ciphers will be Added soon.     </i>
                    </small>
                </p>



                <!--BUTTON GROUP-->

                <div class="button-adj">
                    <a class="btn btn-success hvr-float-shadow circle-btn" href="./pages/ceasar.html">
                        <div class="button-inner-ele">Ceasar Cipher</div>
                    </a>
                    <a class="btn btn-warning circle-btn hvr-float-shadow " href="./pages/rail_fence.html">
                        <div class="button-inner-ele ">Rail Fence Cipher</div>
                    </a>
                    <a class="btn btn-danger circle-btn hvr-float-shadow " href="./pages/atbash.html">
                        <div class="button-inner-ele ">Atbash Cipher</div>
                    </a>
                      <a class="btn btn-primary circle-btn hvr-float-shadow " href="./pages/simple-substitution.html">
                        <div class="button-inner-ele ">Simple Substitution <br>Cipher</div>
                    </a>

                </div>
            </div>
        </div>



    </div>
	
<!-- Modal -->
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Login</h4>
      </div>
      <div class="modal-body">
        	<form class="form"  method="post" action="./index.php">
				  <div class="form-group">
					<label for="input_password">Email</label>
					<input type="email" name="input_email" class="form-control" id="input-email" placeholder="youremail@someprovider.com">
				  </div>
				  <div class="form-group">
					<label for="input_password">Password</label>
					<input type="password" name="input_password" class="form-control" id="input-password" placeholder="password">
				  </div>
				  
			</form>
     <div id="info"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" onClick="process()"  class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</div>
<!--ModalEnd-->




    <!--Footer Start-->
    <footer>
    <div class="cst-footer">
        <div id="footer-img-adj">
            <img src="./images/banner2.jpg" alt="Logog" class="img-responsive ">
        </div>

    </div>
    </footer>


</body>


</html>