function startup(){
    let imageaccess = document.getElementById("100");
    number = 3;
    for(i = 1;i<=number;i++){
        let div0 = document.createElement('div');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        i1 = "img/disk/" + i + ".jpg";
        i2 = "img/disk/" + i + "_.jpg";

        img1.setAttribute("src", i1);
        img2.setAttribute("src", i2);

        div0.appendChild(img1);
        div0.appendChild(img2);
        imageaccess.appendChild(div0)
    }
}