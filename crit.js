var plevelv = document.getElementById("plevel");
var plevel;

var oldcritv = document.getElementById("oldcrit");
var oldcrit;
var oldflatv = document.getElementById("oldFlat");
var oldFlat;
var oldcrv = document.getElementById("oldcr");
var oldcr;

var oldcritR = 0;

var newcritv = document.getElementById("newcrit");
var newcrit;
var newflatv = document.getElementById("newFlat");
var newFlat;
var newcrv = document.getElementById("newcr");
var newcr;

var newcritR = 0;






function validate(){
    plevel = plevelv.value;
    oldcrit = oldcritv.value;
    oldFlat = oldflatv.value;
    oldcr = oldcrv.value

    newcrit = newcritv.value;
    newFlat = newflatv.value;
    newcr = newcrv.value

    oldcritR = critseparator(oldcrit,plevel);
    newcritR = critseparator(newcrit,plevel);

    if (oldcr != null){
        oldcritR += Number(oldcr);
    }
    if (newcr != null){
        newcritR += Number(newcr);
    }
    

    var oldavg = oldcritR/100*1.5*oldFlat + (1 - oldcritR/100)*oldFlat;
    var newavg = newcritR/100*1.5*newFlat + (1 - newcritR/100)*newFlat;

    document.getElementById("old").innerHTML = "old crit%: "+  oldcritR.toFixed(3);
    document.getElementById("oldf").innerHTML = "old avg: "+  oldavg.toFixed(3);
    document.getElementById("new").innerHTML = "new crit%: "+ newcritR.toFixed(3);
    document.getElementById("newf").innerHTML = "old avg: "+  newavg.toFixed(3);
    colorbest(oldavg,newavg);

    return 0;

    
}

function critseparator(crit, lvl){
    let critrate = crit/(lvl*2.666-27);
    return critrate;
}

function colorbest(a,b){
    document.getElementById("ndiv").style.backgroundColor = "initial";
    document.getElementById("odiv").style.backgroundColor = "initial";

    if (a>b){
        document.getElementById("odiv").style.backgroundColor = "green";
    
    }
    else if (a<b){
        
        document.getElementById("ndiv").style.backgroundColor = "green";
    }

}