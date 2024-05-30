// Fecha de la boda
var weddingDate = new Date("2024-12-31T00:00:00").getTime();

// Actualizar cuenta regresiva cada segundo
var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    // Calcular días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar resultado
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Si la cuenta termina
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("clock").innerHTML = "¡Es el día de la boda!";
    }
}, 1000);

// Cargar lista de asistentes desde el almacenamiento local si está disponible
document.addEventListener('DOMContentLoaded', function() {
    var guestList = localStorage.getItem('guestList');
    if (guestList) {
        document.getElementById('guestList').innerHTML = guestList;
    }
});

// Agregar evento de envío al formulario de confirmación de asistencia
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    var name = document.getElementById('name').value;
    var guests = document.getElementById('guests').value;

    // Crear un nuevo elemento de lista
    var li = document.createElement('li');
    if (guests === "1") {
        li.textContent = name + " (1 acompañante)";
    } else {
        li.textContent = name + " (" + guests + " acompañantes)";
    }
    
    // Añadir el nuevo elemento a la lista de invitados
    document.getElementById('guestList').appendChild(li);
    
    // Guardar lista de asistentes en el almacenamiento local
    localStorage.setItem('guestList', document.getElementById('guestList').innerHTML);
    
    // Limpiar el formulario
    document.getElementById('rsvpForm').reset();
});



