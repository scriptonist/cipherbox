
var xmlHttp = createXmlHttpRequestObject();
//Create XML Object 
function createXmlHttpRequestObject()
{
	var xmlHttp;
	
	//For Support On IE
	if(window.ActiveXObject){
		try{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		}
	}//Chrome Firefox 
	else{
		try{
		xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
	}
	if(!xmlHttp){
		alert("Cant Create Object !");
	}
	else
		return xmlHttp;
	
}
//Make Connection TO Server
function process(){
	
	if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0){
		password = encodeURIComponent(document.getElementById('input-password').value);
		email = encodeURIComponent(document.getElementById('input-email').value);
		var vars = "input_password="+password+"&input_email="+email;
		xmlHttp.open("POST","./phppages/login.php",true);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send(vars);
	}
	
}
//Handle The Response

function handleServerResponse(){
	if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
		try{
			
			xmlResponse = xmlHttp.responseXML;
			xmlDocumentElement = xmlResponse.documentElement;
			htmlLoginHandle(xmlDocumentElement.firstChild.data);
			
		
		}
		catch(e)
		{
			alert(e.toString());
		}
}
}

function htmlLoginHandle(data)
{
	
	if(data != '0')
		reload_page();
	else
		document.getElementById('info').innerHTML = "<div class='alert alert-danger alert-dismissable'><button type = 'button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><span class='glyphicon glyphicon-remove' aria-hidden='true'></span><span class='text-danger'> Authentication Error. Login Failed  </span></div>";
}

function reload_page()
{
	window.location.assign("./index.php");
}