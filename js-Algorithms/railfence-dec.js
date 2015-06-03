/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function decrypt(msg,key)
{
     msg = msg.split(" ").join('');
    var dec=[];
    var rows = new Array();
    var rows = new Array()
    for (i = 0; i < 3; i++) 
    {
    rows[i] = new Array();
    for (j = 0; j < 10; j++) 
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
    console.log(dec);
    
}
decrypt("dnetlhseedheswloteateftaafcl",3);
