var rolls = 0;
var srrolls = 0;
amt = 0;
cost = 0;
document.getElementById("test3").style.display = "none";
document.getElementById("test4").style.display = "none";
document.getElementById("test5").style.display = "none";
var res = [];
var chosenbanner = "claudia.PNG"
var ch = "url('img1/Claudiabanner.PNG')"

document.body.style.backgroundImage = "url('img1/Claudiabanner.PNG')";

const banner = document.getElementById("banner");
banner.addEventListener('change',(event) => {
    change_banner(event.target.value);
})

function change_banner(nom){
    if (nom == "Frigg"){
    document.body.style.backgroundImage = "url(img1/frigg.png)";
    ch = "url('img1/frigg.png')"
    chosenbanner = "ssr11.PNG"
    }
    else if (nom == "Nemesis"){
        document.body.style.backgroundImage = "url('img1/nemesis.png')";
        ch = "url('img1/nemesis.png')"
        chosenbanner = "ssr10.PNG"
    }
    else if (nom == "Claudia"){
        document.body.style.backgroundImage = "url('img1/Claudiabanner.PNG')";
        ch = "url('img1/Claudiabanner.PNG')"
        chosenbanner = "claudia.PNG"
    }
    else if (nom == "Cobalt-B"){
        document.body.style.backgroundImage = "url('img1/cobaltbanner.png')";
        ch = "url('img1/cobaltbanner.png')"
        chosenbanner = "notfound.png"
    }
    else if (nom == "Ruby"){
        document.body.style.backgroundImage = "url('img1/ruby.png')";
        ch = "url('img1/ruby.png')"
        chosenbanner = "notfound.png"
    }
    else if (nom == "Saki"){
        document.body.style.backgroundImage = "url('img1/saki.png')";
        ch = "url('img1/saki.png')"
        chosenbanner = "notfound.png"
    }
    else if (nom == "Lin"){
        document.body.style.backgroundImage = "url('img1/lin.PNG')";
        ch = "url('img1/lin.PNG')"
        chosenbanner = "linpull.png"
    }
}



function calc_rol(){
    document.getElementById("content1").innerHTML = '';
    document.getElementById("content2").innerHTML = '';
    document.getElementById("test3").style.display = "none";
    document.getElementById("test4").style.display = "none";
    document.getElementById("test5").style.display = "none";
    base = document.getElementById("base");
    base.style.display = 'none';
    document.body.style.backgroundImage = "url('img1/pullscreen.jpg')";
    // document.body.setAttribute("class","bg1");
    
    cst = document.getElementById("cost");
    ssr = document.getElementById("SSR");
    res = tenpull();
    dv = document.getElementById("content2");
    let lst = [];

    let widthpx = screen.width/2.6;

    for(i=0;i<10;i++){
        img = document.createElement("img");
        img.src = "img1/" + res[i];
        img.setAttribute("height",widthpx);
        lst.push(img);
    }
    // for(const l of lst){
    //     setTimeout(function(){
    //         console.log(l);
    //         dv.appendChild(l)   
    //     },"1000" )
        
    // }
    let delay = 100;
    for (const l of lst) {
        setTimeout(() => {
            dv.appendChild(l);
        }, delay);
        delay += 100
    }
    setTimeout(() => {
        document.getElementById("test3").style.display = "block";
        document.getElementById("test4").style.display = "block";
        document.getElementById("test5").style.display = "block";
    }, 1200);

    



    cst.innerHTML = "cost: " + cost + " ~ " + Math.round(100*cost/7780) + ' €';
    ssr.innerHTML = "SSR's: " + amt;
}

function calc_rol1(){
    document.getElementById("test3").style.display = "none";
    document.getElementById("test4").style.display = "none";
    document.getElementById("test5").style.display = "none";
    document.getElementById("content1").innerHTML = '';
    document.getElementById("content2").innerHTML = '';
    base = document.getElementById("base");
    base.style.display = 'none';
    document.body.style.backgroundImage = "url('img1/pullscreen.jpg')";
    document.getElementById("test3").style.display = "block";
    // document.body.setAttribute("class","bg1");
    cst = document.getElementById("cost");
    ssr = document.getElementById("SSR");
    img = document.createElement("img");
    img.src = "img1/" + singleroll();
    let widthpx = screen.width/2.6;
    img.setAttribute("height",widthpx);
    document.getElementById("content1").appendChild(img);
    cst.innerHTML = "cost: " + cost + " ~ " + Math.round(100*cost/7780) + ' €';
    ssr.innerHTML = "SSR's :" + amt;

    setTimeout(() => {
        document.getElementById("test3").style.display = "block";
        document.getElementById("test4").style.display = "block";
        document.getElementById("test5").style.display = "block";
    }, 50);

}

function retu(){
    document.getElementById("test3").style.display = "none";
    document.getElementById("test4").style.display = "none";
    document.getElementById("test5").style.display = "none";
    document.body.style.backgroundImage = ch;
    base = document.getElementById("base").style.display = 'block';
    document.getElementById("content1").innerHTML = '';
    document.getElementById("content2").innerHTML = '';
    document.body.setAttribute("class","bg");
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
        ten = Math.floor(Math.random() * 10)
        if (ten == 9){ return chosenbanner;}
        return "ssr" + ten + ".PNG";
    }
    }
    else if (rolls%80 != 0 && srrolls%10 == 0){
        srrolls = 0;
        if (rdn <= 95.4){
            return "SR" + Math.floor(Math.random() * 5) + ".PNG";
        }
        else {
            amt += 1;
            ten = Math.floor(Math.random() * 10)
            if (ten == 9){ return chosenbanner;}
            return "ssr" + ten + ".PNG";
        }
    }
    else {
        amt += 1;
        j = Math.floor(Math.random() * 15)
        if (j>8) return chosenbanner;
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