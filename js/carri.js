let imgbox = document.getElementById("imgbox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click", function () {
    imgbox.setAttribute("src", "img/moto-1.jpg");
});

imgMini2.addEventListener("click", function () {
    imgbox.setAttribute("src", "img/moto-2.png");
});

imgMini3.addEventListener("click", function () {
    imgbox.setAttribute("src", "img/moto-3.jpg");
});

imgMini4.addEventListener("click", function () {
    imgbox.setAttribute("src", "img/pulsarmania.jpg");
});

let boton1 = document.getElementById("obj1");
let boton2 = document.getElementById("obj2");
let boton3 = document.getElementById("obj3");
let boton5 = document.getElementById("obj5");
let click = 1;
let precio = 10000000;
boton1.addEventListener("click", function () {
    if (click == 1) {
        boton2.innerHTML = click = 1;;

    } else {
        click = click - 1;
        boton2.innerHTML = click;
         precio = precio - 10000000; 
        precioTotal = new Intl.NumberFormat().format(precio);
        boton5.innerHTML = precioTotal;
    }


});
boton3.addEventListener("click", function () {
    if (click == 10) {
        boton2.innerHTML = click = 10;

    } else {
        click = click + 1;
        boton2.innerHTML = click;
        precio = precio + 12000000; 
        precioTotal = new Intl.NumberFormat().format(precio);
        boton5.innerHTML = precioTotal;
    }
});









