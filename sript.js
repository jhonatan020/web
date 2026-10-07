document.addEventListener('DOMContentLoaded', () => {
    // 1. Botón Volver Arriba
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 2. Menú Responsive
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    // 3. Validación de Formulario
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            let isValid = true;

            if (nombre.length < 3) { showError('error-nombre', 'Ingresa tu nombre.'); isValid = false; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('error-email', 'Correo inválido.'); isValid = false; }
            if (!/^[0-9]{9,}$/.test(telefono)) { showError('error-telefono', 'Mínimo 9 dígitos.'); isValid = false; }
            if (mensaje.length < 10) { showError('error-mensaje', 'Mínimo 10 caracteres.'); isValid = false; }

            if (isValid) {
                const confirmBox = document.getElementById('confirmation-message');
                confirmBox.textContent = '¡Gracias por contactarnos desde Cerro de Pasco! Te responderemos de inmediato.';
                confirmBox.className = 'confirm-box success';
                contactForm.reset();
                setTimeout(() => { confirmBox.style.display = 'none'; }, 5000);
            }
        });
    }

    function showError(id, msg) { document.getElementById(id).textContent = msg; }
    function clearErrors() { document.querySelectorAll('.error-msg').forEach(el => el.textContent = ''); }
});
