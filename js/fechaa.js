function calcularTiempoRestante() {
  var fechaLimite = new Date(
    document.getElementById("anio").value,
    document.getElementById("mes").value - 1,
    document.getElementById("dia").value,
    document.getElementById("hora").value,
    document.getElementById("minuto").value
  );

  var ahora = new Date();
  var tiempoRestante = fechaLimite - ahora;

  if (tiempoRestante < 0) {
    document.getElementById("resultado").innerHTML = "El plazo ha vencido. No se puede cargar el archivo.";
    return;
  }

  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("resultado").innerHTML =
    "Faltan " + dias + " días, " + horas + " horas y " + minutos + " minutos para vencer el plazo.";
}