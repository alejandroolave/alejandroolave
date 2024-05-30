function llenarBarras() {
    let puntuacion5 = parseFloat(document.getElementById("puntuacion5").value) || 0;
    let puntuacion4 = parseFloat(document.getElementById("puntuacion4").value) || 0;
    let puntuacion3 = parseFloat(document.getElementById("puntuacion3").value) || 0;
    let puntuacion2 = parseFloat(document.getElementById("puntuacion2").value) || 0;
    let puntuacion1 = parseFloat(document.getElementById("puntuacion1").value) || 0;

    let sumaTotal = puntuacion5 + puntuacion4 + puntuacion3 + puntuacion2 + puntuacion1;

    if (sumaTotal > 0) {
      let barras = document.querySelectorAll("#starBars progress");
      let labels = document.querySelectorAll("#starBars .progress-label");

      barras.forEach((bar, index) => {
        let porcentaje = (eval(`puntuacion${5 - index}`) / sumaTotal) * 100; // Aquí, 5 - index se utiliza para generar dinámicamente los números del 5 al 1. Explicado de manera simple, cuando index es 0, obtienes 5 - 0 = 5, cuando
        bar.value = porcentaje;
        labels[index].textContent = `${porcentaje.toFixed()}%`;
      });
    }
  }