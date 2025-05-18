function formatoNumero() {
    var input = document.getElementById('telefono');
    var numero = input.value.replace(/\D/g, ''); // Eliminar no dígitos
    numero = numero.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Formatear como xxx-xxx-xxxx
    input.value = numero;
}


// Mostrar el modal si el parámetro 'mensaje' es 'borrado_exitoso' el script ejecuta el modal con el mensaje 
window.onload = function() {
const params = new URLSearchParams(window.location.search);

if (params.has('registro') && params.get('registro') === 'registro_exitosamente') {
$("#myModalexitoso").modal("show");
} 

if (params.has('error') && params.get('error') === 'error_password') {
$("#myModalerror").modal("show");
} 

if (params.has('error2') && params.get('error2') === 'error_telefono') {
$("#myModalerror2").modal("show");
} 

if (params.has('error3') && params.get('error3') === 'error_email') {
$("#myModalerror3").modal("show");
} 

if (params.has('error4') && params.get('error4') === 'error_nombre') {
$("#myModalerror4").modal("show");
} 

};

////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('contraseña');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'text' ? 'password' : 'text' ;
        passwordInput.setAttribute('type', type);

        // Cambiar el ícono del ojo
        this.classList.toggle('bx-show');
        this.classList.toggle('bx-hide');
    });
});