
function encrypt(msg,key)
{
    msg = msg.split(" ").join('');
    var rows_enc = new Array();
    var enc = []
    for (i = 0; i < key; i++) 
    {
    rows_enc[i] = new Array();
    for (j = 0; j < msg.length; j++) 
        {
        rows_enc[i][j] = '~';
        }
    }
    var index = 0;
    var rc =0;
    var fl = 0;
    for(i=0;i< msg.length;i++)
    {
        rows_enc[rc][index] = msg[i];
        index +=1;
        if(fl == 0)
        {
            rc += 1;
        }
        else{rc -= 1;}
        if(rc == key)
        {
            fl = 1;
            rc -= 2;
        }
        if(rc == 0)
        {
            fl = 0;
        }
    }
    for(i=0;i<key;i++)
    {
        for(j=0;j<msg.length;j++)
        {
            if(rows_enc[i][j] != "~" && rows_enc[i][j] != undefined)
            {
                enc.push(rows_enc[i][j]);
            }
        }
    }
    enc = enc.toString();
    enc = enc.split(',').join('');
    return enc;
}


/* ------------------------------------
---------DECRYPTION FUNCTION-----------
---------------------------------------*/



function decrypt(msg,key)
{
     msg = msg.split(" ").join('');
    var dec=[];
    var rows = new Array();
    var rows = new Array()
    for (i = 0; i < key; i++) 
    {
    rows[i] = new Array();
    for (j = 0; j <msg.length; j++) 
        {
        rows[i][j] = '~';
        }
    }
    index = 0 ;
	alp_ind = 0;
	fl = 0;
	rc = 0;
    while (index < msg.length) {

     if (rc == 0) {
         rows[rc][index] = msg[alp_ind];
         index += 1;
         rc += 1;
         alp_ind += 1;
     }
     if( fl == 0) {
         rows[rc][index] = "*";
         rc += 1;

         index += 1;
     } else {
         rows[rc][index] = "*";
         rc -= 1;

         index += 1;
     }

     if( rc == key) {
         rc -= 2;
         fl = 1;
     }
     if (rc == 0) {
         rc = 0;
         fl = 0;
     }
 }
  
    for(i=1;i<key;i++)
        {
            for(j=0;j<msg.length;j++)
                {
                    if(rows[i][j] == "*")
                        {
                            rows[i][j] = msg[alp_ind];
                            alp_ind +=1;
                        }
                }
        }
    
     for(i=0;i<msg.length;i++)
        {
            for(j=0;j<key;j++)
                {
                    if(rows[j][i] != "~" && rows[j][i] != undefined )
                        {
                            dec.push(rows[j][i]);
                           
                        }
                }
        }
     dec = dec.toString();
    dec = dec.split(',').join('');
    return dec;
    
}

/*-----------------------------------------------------
------END OF ENCRYPT AND DECRYPT FUNCTIONS ------------
------------------------------------------------------*/

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
