  
  /// Script para mostrar y cerrar el popup -->

    document.addEventListener("DOMContentLoaded", function () {
      const popup = document.getElementById("popup-anuncio");
      const cerrarPopup = document.getElementById("cerrar-popup");
  
      // Mostrar el popup después de 2 segundos
      setTimeout(function () {
        popup.style.display = "block";
      }, 2000);
  
      // Cerrar el popup al hacer clic en la "X"
      cerrarPopup.addEventListener("click", function () {
        popup.style.display = "none";            
      });
  
      // Cerrar el popup si se hace clic fuera del contenido
      popup.addEventListener("click", function (event) {
        if (event.target === popup) {
          popup.style.display = "none";
        }
      });
    });
