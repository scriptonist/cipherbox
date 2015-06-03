function encrypt(msg,key)
{
    msg = msg.split(" ").join('');
    var rows = new Array();
    var enc = []
    for (i = 0; i < 3; i++) 
    {
    rows[i] = new Array();
    for (j = 0; j < msg.length; j++) 
        {
        rows[i][j] = '~';
        }
    }
    var index = 0;
    var rc =0;
    var fl = 0;
    for(i=0;i< msg.length;i++)
    {
        rows[rc][index] = msg[i];
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
            if(rows[i][j] != "~" && rows[i][j] != undefined)
            {
                enc.push(rows[i][j]);
            }
        }
    }
    console.log(enc);
}
encrypt("Defend the east wall",3);