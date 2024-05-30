function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

document.getElementById("btnGracias").addEventListener("click", function() {
    document.getElementById("modalGracias").style.display = "block";
});

document.getElementById("closeGracias").addEventListener("click", function() {
    document.getElementById("modalGracias").style.display = "none";
});

document.getElementById("btnLoSiento").addEventListener("click", function() {
    document.getElementById("modalLoSiento").style.display = "block";
});

document.getElementById("closeLoSiento").addEventListener("click", function() {
    document.getElementById("modalLoSiento").style.display = "none";
});






document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el loader
    const loader = document.querySelector(".loader-wrapper");
    loader.style.display = "flex";
  
    // Ocultar el loader después de 3 segundos
    setTimeout(function() {
      loader.style.display = "none";
    }, 100); // 3000 milisegundos = 3 segundos
  });
  