function encrypt(msg,shift)
{
  msg = msg.toLowerCase();
  msg = msg.split('');
  
  var sh,asc;
  for(i in msg)
    {
      sh = shift;
      asc = msg[i].charCodeAt();
      if(asc + sh > 122)
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

function ValidateForm()
{
    inp = document.forms["form-ceasar"]["enc-string"].value;
    shft = document.forms["form-ceasar"]["enc-shift"].value;
    if(inp == null || inp =='' || shft == null || shft == "")
    {
      alert("Please Fill The Required Fields!");
      
    }
    else
    {
      submittedForm();
      
      
    
      
    }

}

function submittedForm()
{
  
    var msg = String(document.getElementById("enc-form").value);
    var shift = parseInt(document.getElementById("enc-shift").value);
    encoded = "Encoded Message IS : " + encrypt(msg,shift);
    document.getElementById("enc-text").innerHTML  = encoded;


  
}