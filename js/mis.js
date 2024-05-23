function toggleSubpantalla() {
    var subpantalla = document.getElementById("subpantalla");
    subpantalla.style.display = (subpantalla.style.display === "block") ? "none" : "block";
}





// Variable de estado para controlar si la alerta ya se mostró
var alertaMostrada = false;

// Función para mostrar el mensaje inicial y ocultar el contenido normal
window.onload = function() {
    // Mostrar el mensaje inicial
    document.getElementById("inicial").style.display = "block";
}

// Función para mostrar el contenido normal y ocultar el mensaje inicial
function mostrarContenido() {
    // Ocultar el mensaje inicial
    document.getElementById("inicial").style.display = "none";
    // Mostrar el contenido normal
    document.getElementById("contenido").style.display = "block";
}



