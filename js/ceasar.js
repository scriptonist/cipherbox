function isalpha(c) {
    return (((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z')));
  }
function encrypt(msg,shift)
{
  msg = msg.toLowerCase();
  msg = msg.split('');
  
  var sh,asc;
  for(i in msg)
    {
      sh = shift;
      asc = msg[i].charCodeAt();
      if(asc + sh > 122 && isalpha(msg[i]))
        {
          sh = (sh +asc) - 122;
          msg[i] = String.fromCharCode(96 + sh);
        }
      else{
        msg[i] = String.fromCharCode(asc + sh)
      }
      
    }
  msg = msg.join('');
  return msg;
}
function decrypt(msg,shift)
{
  msg = msg.toLowerCase();
  msg = msg.split('');
  var sh,asc;
  for (ind in msg)
  {
    sh = shift;
    asc = msg[ind].charCodeAt();
    if(asc-sh < 97 && isalpha(msg[ind]))
    {
      sh = sh-(asc-97);
      msg[ind] = String.fromCharCode(123-sh);
    }
    else
    {
      
      msg[ind] = String.fromCharCode(asc-sh)
    }
    
  }
  msg = msg.join('');
    return msg;
}

function ValidateForm()
{
    inp = document.getElementById("enc-form").value ;
    shft = document.getElementById("enc-shift").value;
    if(inp == null || inp =='' || shft == null || shft == "")
    {
      alert("Please Fill The Required Fields!");
      
    }
    else
    {
      submittedForm();
    }

}

function ValidateForm2()
{
    inp = document.getElementById("dec-form").value ;
    shft = document.getElementById("dec-shift").value;
    if(inp == null || inp =='' || shft == null || shft == "")
    {
      alert("Please Fill The Required Fields!");
      
    }
    else
    {
      submittedForm2();
    }

}

function submittedForm2()
{
  
    var msg = String(document.getElementById("dec-form").value);
    var shift = parseInt(document.getElementById("dec-shift").value);
    decoded = decrypt(msg,shift) ;
    decoded = "Decoded String :  " + decoded.toUpperCase();


    document.getElementById("dec-text").setAttribute("class","alert alert-success ciph-cont");
    document.getElementById("dec-text").role ="alert";
    document.getElementById("dec-text").innerHTML  ="<h2>Success!</h2> <br>"+"<strong>" +decoded+"</strong"
    + "<br><br><br><small><a class='btn btn-default' href='ceasar.html' class ='alert-link'>Decode another</a></small";
    window.scrollTo(0,500);

  
}
function submittedForm()
{
  
    var msg = String(document.getElementById("enc-form").value);
    var shift = parseInt(document.getElementById("enc-shift").value);
    encoded = encrypt(msg,shift) ;
    encoded = "Encoded String :  " + encoded.toUpperCase();

    document.getElementById("enc-text").setAttribute("class","alert alert-success ciph-cont");
    document.getElementById("enc-text").role ="alert";
    document.getElementById("enc-text").innerHTML  ="<h2>Success!</h2> <br>"+"<strong>" +encoded+"</strong"
    + "<br><br><br><small><a class='btn btn-default' href='ceasar.html' class ='alert-link'>encode another</a></small";


  
}