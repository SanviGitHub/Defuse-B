// script.js

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling para enlaces del menú
    const menuLinks = document.querySelectorAll("header nav ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    // Smooth scrolling para botón de inscripción
    document.getElementById('inscribirse-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.getElementById('contacto');
        anime({
            targets: 'html, body',
            scrollTop: target.offsetTop,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });

    // Función para animar el desplazamiento suave
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        anime({
            targets: 'html, body',
            scrollTop: targetSection.offsetTop,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    }
});
