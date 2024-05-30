document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.zIndex = '-1';
    }, 5000); // Ajusta este valor para que coincida con la duración del preloader
});


// Obtener todas las secciones
const sections = document.querySelectorAll('section');

// Índice de la sección actual
let currentSectionIndex = 0;

// Calcular la altura total de todas las secciones
const totalSectionsHeight = Array.from(sections).reduce((acc, section) => acc + section.offsetHeight, 0);

// Mostrar u ocultar la flecha de scroll hacia arriba
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

// Hacer scroll hacia arriba al hacer clic en la flecha de scroll hacia arriba
document.getElementById("scroll-up").addEventListener("click", function() {
    const nextSectionIndex = currentSectionIndex - 1;
    if (nextSectionIndex >= 0) {
        const nextSection = sections[nextSectionIndex];
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
        });
        currentSectionIndex = nextSectionIndex;
    }
});

// Mostrar u ocultar la flecha de scroll hacia abajo
window.addEventListener('scroll', function() {
    const lastScroll = window.scrollY;
    if (lastScroll > totalSectionsHeight - window.innerHeight - 300) {
        document.getElementById("scroll-down").style.display = "none";
    } else {
        document.getElementById("scroll-down").style.display = "block";
    }
}, false);

// Hacer scroll hacia abajo al hacer clic en la flecha de scroll hacia abajo
document.getElementById("scroll-down").addEventListener("click", function() {
    const nextSectionIndex = currentSectionIndex + 1;
    if (nextSectionIndex < sections.length) {
        const nextSection = sections[nextSectionIndex];
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
        });
        currentSectionIndex = nextSectionIndex;
    }
});






document.addEventListener('DOMContentLoaded', () => {
    const robot = document.getElementById('robot');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            robot.classList.add('show');
        } else {
            robot.classList.remove('show');
        }
    });

    robot.addEventListener('click', () => {
        window.location.href = "https://api.whatsapp.com/send?phone=573193103884";
    });

    // Agregar animación de risa
    const robotImg = document.querySelector('.robot-img');
    robotImg.addEventListener('click', () => {
        robotImg.classList.toggle('laugh');
    });
});



function fijarProyecto(id) {
    var proyecto = document.getElementById(id);
    var img = proyecto.querySelector('.proyecto-img');
    var fullScreenOverlay = document.getElementById('fullScreenOverlay');
    var fullScreenFrame = document.getElementById('fullScreenFrame');

    var srcMap = {
        'proyecto1': 'movimientos.html',
        'proyecto2': 'indexx.html',
        'proyecto3': '',
        'proyecto4': 'https://enlace/proyecto4',
        'proyecto5': 'https://enlace/proyecto5'
    };

    fullScreenFrame.src = srcMap[id];
    fullScreenOverlay.style.display = 'flex';
}

function cerrarFullScreen() {
    var fullScreenOverlay = document.getElementById('fullScreenOverlay');
    fullScreenOverlay.style.display = 'none';
    var fullScreenFrame = document.getElementById('fullScreenFrame');
    fullScreenFrame.src = '';
}
















function mostrarProyecto(proyectoId) {
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modal-body");

    var contenido = "";
    switch (proyectoId) {
        case 'proyecto1':
            contenido = `
                <h2>Proyecto 1</h2>
                <p>Descripción detallada del proyecto 1.</p>
                <a href="https://link-a-proyecto1.com" target="_blank">Ver proyecto</a>
                <img src="ruta/a/imagen1.jpg" alt="Proyecto 1" class="proyecto-img">
            `;
            break;
        case 'proyecto2':
            contenido = `
                <h2>Proyecto 2</h2>
                <p>Descripción detallada del proyecto 2.</p>
                <a href="https://link-a-proyecto2.com" target="_blank">Ver proyecto</a>
                <img src="ruta/a/imagen2.jpg" alt="Proyecto 2" class="proyecto-img">
            `;
            break;
        case 'proyecto3':
            contenido = `
                <h2>Proyecto 3</h2>
                <p>Descripción detallada del proyecto 3.</p>
                <a href="https://link-a-proyecto3.com" target="_blank">Ver proyecto</a>
                <img src="ruta/a/imagen3.jpg" alt="Proyecto 3" class="proyecto-img">
            `;
            break;
        case 'proyecto4':
            contenido = `
                <h2>Proyecto 4</h2>
                <p>Descripción detallada del proyecto 4.</p>
                <a href="https://link-a-proyecto4.com" target="_blank">Ver proyecto</a>
                <img src="ruta/a/imagen4.jpg" alt="Proyecto 4" class="proyecto-img">
            `;
            break;
        case 'proyecto5':
            contenido = `
                <h2>Proyecto 5</h2>
                <p>Descripción detallada del proyecto 5.</p>
                <a href="https://link-a-proyecto5.com" target="_blank">Ver proyecto</a>
                <img src="ruta/a/imagen5.jpg" alt="Proyecto 5" class="proyecto-img">
            `;
            break;
        default:
            contenido = "<p>Proyecto no encontrado.</p>";
            break;
    }

    modalBody.innerHTML = contenido;
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar modal cuando el usuario hace clic fuera del modal
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
















function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }

  // Función para cerrar la pantalla emergente
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  // Agrega un evento de clic al cuadro dos para abrir la pantalla emergente
  document.querySelector('.dos').addEventListener('click', openPopup);








  function mostrarTitulo(element) {
    element.getElementsByClassName('titulo')[0].style.display = 'block';
}

function ocultarTitulo(element) {
    element.getElementsByClassName('titulo')[0].style.display = 'none';
}