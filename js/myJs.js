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