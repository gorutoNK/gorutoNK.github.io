// Función para mostrar modales basados en los parámetros de la URL
function mostrarModales() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('error') && params.get('error') === 'error_password') {
        $("#myModalpassword").modal("show");
    }
    
    if (params.has('error2') && params.get('error2') === 'error_estatus') {
        $("#myModalestatus").modal("show");
    } 
    
    if (params.has('error3') && params.get('error3') === 'error_email') {
        $("#myModalemail").modal("show");
    }
}

// Función para manejar el toggle de la visibilidad de la contraseña
function manejarTogglePassword() {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('contraseña');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'text' ? 'password' : 'text';
        passwordInput.setAttribute('type', type);

        // Cambiar el ícono del ojo
        this.classList.toggle('bx-show');
        this.classList.toggle('bx-hide');
    });
}

// Función para formatear el número de teléfono
function formatoNumero() {
    var input = document.getElementById('identifier');
    var numero = input.value.replace(/\D/g, ''); // Eliminar no dígitos
    numero = numero.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Formatear como xxx-xxx-xxxx
    input.value = numero;
}

// Ejecutar las funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    mostrarModales();
    manejarTogglePassword();
});
