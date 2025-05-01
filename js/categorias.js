function redireccionar() {
    var categoria = document.getElementById("seleccionarCategoria").value;
    if (categoria === "alimentos") {
        window.location.href = "productos.html";
    } else if (categoria === "vestimenta") {
        window.location.href = "vestimenta.html";
    } else if (categoria === "equipos") {
        window.location.href = "equipos.html";
    }
}


////////////////script de titulos de productos///////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
const h2Elements = document.querySelectorAll('.producto-info h2');

h2Elements.forEach(function(h2) {
h2.setAttribute('title', h2.textContent);
});
});



