document.addEventListener("DOMContentLoaded", function() {
    const streamToggle = document.getElementById('stream-toggle');
    const streamLink = document.getElementById('stream-link');
    const liveButton = document.getElementById('live-link');

    streamToggle.addEventListener('change', function() {
        const selectedValue = streamToggle.value;
        if (selectedValue === 'si') {
            // Mostrar con animación
            anime({
                targets: streamLink,
                opacity: 1,
                duration: 500,
                easing: 'easeInOutQuad',
                begin: function() {
                    streamLink.style.display = 'block';
                    anime({
                        targets: liveButton,
                        opacity: 1,
                        translateY: [-10, 0],
                        duration: 500,
                        easing: 'easeInOutQuad'
                    });
                }
            });
        } else {
            // Ocultar con animación
            anime({
                targets: liveButton,
                opacity: 0,
                translateY: [0, -10],
                duration: 500,
                easing: 'easeInOutQuad',
                complete: function() {
                    anime({
                        targets: streamLink,
                        opacity: 0,
                        duration: 500,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            streamLink.style.display = 'none';
                        }
                    });
                }
            });
        }
    });

    // Manejar el clic en el botón de enlace en vivo
    liveButton.addEventListener('click', function() {
        window.location.href = 'https://www.tiktok.com/@rushb360?lang=es';
    });

    // Script para animar el scroll al hacer clic en el botón Inscribirse
    document.getElementById('inscribirse-btn').addEventListener('click', function() {
        const target = document.getElementById('contacto');
        anime({
            targets: 'html, body',
            scrollTop: target.offsetTop,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
});
