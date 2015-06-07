/*--------------------------------------------------------------------------------FUNCTION FOR ECRYPTION--------------------------------------------------------------------------------------------*/
function encrypt(msg,key)
{
  msg = msg.toString();
    msg = msg.toLocaleLowerCase();
    msg = msg.split(' ').join('');
    var alphabets = [];
   var enc = [];

    for(var i='a'.charCodeAt();i<= 'z'.charCodeAt();i++)
    {
        alphabets.push(String.fromCharCode(i));
    }
  for(i=0;i<msg.length;i++)
    {
      for(var j=0;j<alphabets.length;j++)
        {
          if(msg[i] == alphabets[j])
            {
              enc.push(key[j]);
            }
        }
    }
    enc = enc.toString();
    enc = enc.split(',').join('');
  return enc;
}


/*----------------------------------------------------------------
-------------------------DECRYPTION FUNCTION----------------------
-----------------------------------------------------------------*/
function decrypt(msg,key)
{
  msg = msg.toString();
    msg = msg.toLocaleLowerCase();
    msg = msg.split(' ').join('');
    var alphabets = [];
   var enc = [];

    for(var i='a'.charCodeAt();i<= 'z'.charCodeAt();i++)
    {
        alphabets.push(String.fromCharCode(i));
    }
  for(i=0;i<msg.length;i++)
    {
      for(var j=0;j<key.length;j++)
        {
          if(msg[i] == key[j])
            {
              enc.push(alphabets[j]);
            }
        }
    }
    enc = enc.toString();
    enc = enc.split(',').join('');
  return enc;
}

/*---------------------------------------------------------------
-----------------FORM CONTROLS-----------------------------------------------------------------------------------------------------*/


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
    var shift = String(document.getElementById("dec-shift").value);
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
    var shift = String(document.getElementById("enc-shift").value);
    encoded = encrypt(msg,shift) ;
    encoded = "Encoded String :  " + encoded.toUpperCase();

    document.getElementById("enc-text").setAttribute("class","alert alert-success ciph-cont");
    document.getElementById("enc-text").role ="alert";
    document.getElementById("enc-text").innerHTML  ="<h2>Success!</h2> <br>"+"<strong>" +encoded+"</strong"
    + "<br><br><br><small><a class='btn btn-default' href='ceasar.html' class ='alert-link'>encode another</a></small";


  
}
