var rolls = 0;
var srrolls = 0;
amt = 0;
cost = 0;
document.getElementById("test3").style.display = "none";
var res = [];

function calc_rol(){
    base = document.getElementById("base");
    base.style.display = 'none';
    document.body.style.background = "url('img1/pullscreen.jpg')";
    document.getElementById("test3").style.display = "block";
    cst = document.getElementById("cost");
    ssr = document.getElementById("SSR");
    res = tenpull();
    img = document.createElement("img");
    dv = document.getElementById("content2");
    for(i=0;i<10;i++){
        img = document.createElement("img");
        img.src = "img1/" + res[i];
        dv.appendChild(img);
    }
    cst.innerHTML = "cost: " + cost + " ~ " + Math.round(100*cost/7780) + ' €';
    ssr.innerHTML = "SSR's: " + amt;
}

function calc_rol1(){
    base = document.getElementById("base");
    base.style.display = 'none';
    document.body.style.background = "url('img1/pullscreen.jpg')"
    document.getElementById("test3").style.display = "block";

    cst = document.getElementById("cost");
    ssr = document.getElementById("SSR");
    img = document.createElement("img");
    img.src = "img1/" + singleroll();
    document.getElementById("content1").appendChild(img);
    cst.innerHTML = "cost: " + cost;
    ssr.innerHTML = "SSR's :" + amt;

}

function retu(){
    document.getElementById("test3").style.display = "none";
    document.body.style.background = "url('img1/Claudiabanner.PNG')"
    base = document.getElementById("base").style.display = 'block';
    document.getElementById("content1").innerHTML = '';
    document.getElementById("content2").innerHTML = '';
}

function singleroll(){
    rolls += 1;
    srrolls += 1;
    rdn = Math.random();
    rdn *= 100;
    cost += 150;
    if (srrolls%10 != 0 && rolls%80 != 0){
    if (rdn <= 91.4){
        return "rare" + Math.floor(Math.random() * 4) + ".PNG";
    }
    else if (rdn <= 98.25){
        return "blue.PNG";
    }
    else if (rdn <= 99.25){
        srrolls = 0;
        return "SR" + Math.floor(Math.random() * 5) + ".PNG";
    }
    else {
        amt += 1;
        return "ssr" + Math.floor(Math.random() * 10) + ".PNG";
    }
    }
    else if (rolls%80 != 0 && srrolls%10 == 0){
        srrolls = 0;
        if (rdn <= 95.4){
            return "SR" + Math.floor(Math.random() * 5) + ".PNG";
        }
        else {
            amt += 1;
            return "ssr" + Math.floor(Math.random() * 10) + ".PNG";
        }
    }
    else {
        amt += 1;
        j = Math.floor(Math.random() * 15)
        if (j>8) return "ssr9.PNG";
        return "ssr" + Math.floor(Math.random() * 9) + ".PNG";
    }
    
}

function tenpull(){
    res =  []
    for(i=0;i<10;i++){
        res[i] = singleroll();
    }
    return res;
}