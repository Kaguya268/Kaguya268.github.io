

let imageaccess = document.getElementById("100");
let select = document.getElementById("cars");
function change() {



  let imag = select.value;


  let imag2 = "img/img2/" + imag + ".png"


  imageaccess.setAttribute("src", imag2);
}
