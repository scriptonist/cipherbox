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

function formValidation()
{
    inp = document.forms["form-ceasar"]["enc-string"].value;
    shft = document.forms["form-ceasar"]["enc-shift"].value;
    if(inp == null || inp =='' || shft == null || shft == "")
    {
      alert("Please Fill The Required Fields!");
      return false;
    }
    else
    {
alert("test");
      return true;
    }
}