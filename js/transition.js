let transitionjs = document.getElementById("transition")

transitionjs.addEventListener("click", function(){
    alert("soy un boton")
})
let sapajs = document.getElementById("sapa")
let sapojs = document.getElementById("sapo")

sapajs.addEventListener("click", function(){
    if (sapojs.classList.contains("box-m")){
        sapojs.classList.remove("box-m")
    }else{
        sapojs.classList.add("box-m")
    }
})
