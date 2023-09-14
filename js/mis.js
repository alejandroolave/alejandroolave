window.onload = function() {
    var div = document.createElement("div");
    div.innerHTML = "¡ME ESPECIALIZO EN FRONTEND.! ";
    div.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    div.classList.add("alert");
    document.body.appendChild(div);
    
    setTimeout(function() {
        div.remove();
    }, 3000);
}