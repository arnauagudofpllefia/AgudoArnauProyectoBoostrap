document.addEventListener('DOMContentLoaded', function () {
    const boton = document.querySelector('.boton-menu');
    const menu = document.getElementById('menuPrincipal');

    boton.addEventListener('click', function () {
        const abierto = menu.classList.contains('show');

        if (abierto) {
            menu.classList.remove('show');
            boton.setAttribute('aria-expanded', 'false');
        } else {
            menu.classList.add('show');
            boton.setAttribute('aria-expanded', 'true');
        }
    });

    // Cerrar el menu al hacer click en un enlace (en movil)
    menu.querySelectorAll('.nav-link').forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                menu.classList.remove('show');
                boton.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
