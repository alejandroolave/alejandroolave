let imgbox = document.getElementById("imgbox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click",function(){
    imgbox.setAttribute("src","img/moto-1.jpg");
});

imgMini2.addEventListener("click",function(){
    imgbox.setAttribute("src","img/moto-2.png");
});

imgMini3.addEventListener("click",function(){
    imgbox.setAttribute("src","img/moto-3.jpg");
});

imgMini4.addEventListener("click",function(){
    imgbox.setAttribute("src","img/pulsarmania.jpg");
});
let boton1 = document.getElementById("obj1");
boton1.addEventListener("click",function(){
    alert("hola soy el boton de restar...");
});

let boton2 = document.getElementById("obj2");
boton2.addEventListener("click",function(){
    alert("holis....");
});

let boton3 = document.getElementById("obj3");
boton3.addEventListener("click",function(){
    alert("hola soy el boton de sumar...");
});

let numeroelementos = document.getElementById("numeroelementos").innerHTML;

boton3.addEventListener("click",function(){
    let nodeToAdd = document.createElement("p");

    let nodetext = document.createTextNode("HOLA SOY UN PARRAFO");

    nodeToAdd.appendChild(nodetext);

    cant.append(nodetext);
    alert(numeroelementos);
});