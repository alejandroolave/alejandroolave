function toggleLinks() {
    var links = document.querySelector(".links");
    links.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        console.log('bienvenido a mi perfil')
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".content").style.display = "block"; 
    }, 2000); 
});

