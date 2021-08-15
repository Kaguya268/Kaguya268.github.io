



let div = document.createElement("div");
document.body.appendChild(div);
image = document.createElement('img');


let selected =document.getElementById("sel")
image.setAttribute('src', "./img/Promise.png");
div.appendChild(image);


function change() {

  let select = selected.value;
  image.src = select;



}






