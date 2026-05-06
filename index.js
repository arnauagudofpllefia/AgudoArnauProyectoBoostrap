document.addEventListener('DOMContentLoaded', function () {
    const botonMenu = document.querySelector('.boton-menu');
    const menuPrincipal = document.getElementById('menuPrincipal');

    if (!botonMenu || !menuPrincipal) {
        return;
    }

    function abrirMenu() {
        menuPrincipal.classList.add('show');
        botonMenu.setAttribute('aria-expanded', 'true');
    }

    function cerrarMenu() {
        menuPrincipal.classList.remove('show');
        botonMenu.setAttribute('aria-expanded', 'false');
    }

    botonMenu.addEventListener('click', function () {
        const abierto = menuPrincipal.classList.contains('show');

        if (abierto) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    menuPrincipal.querySelectorAll('.nav-link').forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                cerrarMenu();
            }
        });
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape' && menuPrincipal.classList.contains('show')) {
            cerrarMenu();
            botonMenu.focus();
        }
    });
});
