let slider = document.querySelector(".slider");
let moveDerecha = document.querySelector(".flechaderecha");
let moveIzquierda = document.querySelector(".flechaizquierda");

let imegenes = document.querySelectorAll(".imgcarro").length;
let contador = 0;

function cambioDerecha() {
    contador ++; 
    if (contador>imegenes-1){
        contador=0;
    }

    slider.style.marginLeft=`-${contador*100}%`;


}
moveDerecha.addEventListener("click",cambioDerecha);

function cambioIzquierda() {
    contador --; 
    if (contador<0){
        contador= imegenes-1;
    }

    slider.style.marginLeft=`-${contador*100}%`;


}
moveIzquierda.addEventListener("click",cambioIzquierda);
