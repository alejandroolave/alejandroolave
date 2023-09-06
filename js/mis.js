window.onload = function() {
    var div = document.createElement("div");
    div.innerHTML = "¡Estas son mis habilidades.! ";
    div.classList.add("alert");
    document.body.appendChild(div);
    
    setTimeout(function() {
        div.remove();
    }, 3000);
}