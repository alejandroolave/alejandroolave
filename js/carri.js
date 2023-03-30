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
    imgbox.setAttribute("src","img/moto-4.png");
});