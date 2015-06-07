/*Atbash Cipher Encryption Algorithm 
Simple algorith encryption is replacing the a's with z's and vice versa in decryption
*/

function encrypt(msg){
    msg = msg.toString();
    msg = msg.toLocaleLowerCase();
    msg = msg.split(' ').join('');
    var alphabets = [];
   var enc = [];

    for(var i='a'.charCodeAt();i<= 'z'.charCodeAt();i++)
    {
        alphabets.push(String.fromCharCode(i));
    }
  for(var j=0;j<msg.length;j++)
    {
     for(i=0;i<alphabets.length;i++)
      {
        if(msg[j] == alphabets[i])
          {
             
                 enc.push(alphabets[25-i]);
             
          }
      } 
       
     }
    enc = enc.toString();
    enc = enc.split(',').join("");
  return enc;
}


/*----------------------------------------------------
--------_ENCRYPTION FUNCTION_END_---------------------
-----------------------------------------------------*/

function ValidateForm()
{
    inp = document.getElementById("enc-form").value ;
    
    if(inp == null || inp =='')
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
    
    if(inp == null || inp =='')
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
    
    decoded = encrypt(msg) ;
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
    
    encoded = encrypt(msg) ;
    encoded = "Encoded String :  " + encoded.toUpperCase();

    document.getElementById("enc-text").setAttribute("class","alert alert-success ciph-cont");
    document.getElementById("enc-text").role ="alert";
    document.getElementById("enc-text").innerHTML  ="<h2>Success!</h2> <br>"+"<strong>" +encoded+"</strong"
    + "<br><br><br><small><a class='btn btn-default' href='ceasar.html' class ='alert-link'>encode another</a></small";


  
}
