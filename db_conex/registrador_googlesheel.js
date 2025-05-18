
function manejarClick() {
  const nombre = document.getElementById("_input_type_text_3").value.trim();//Se usa .trim() para evitar que un campo lleno con espacios pase la validación.
  const idjugador = document.getElementById("_input_2").value.trim();
  const pais = document.getElementById("_input_3").value.trim();
  const redsocial = document.getElementById("_input_4").value.trim();
  const telefono = document.getElementById("_input_5").value.trim();
  const alias = document.getElementById("_input_6").value.trim();
  const reclutado = document.getElementById("_input_type_text_4").value.trim();
  const fecharegistro = document.getElementById("_input_type_date_1").value.trim();
  const referencia = document.getElementById("_input_type_text_5").value.trim();

  
  // Validar campos obligatorios
  if (!nombre || !idjugador || !pais || !telefono || !fecharegistro) { 
    alert("Por favor, completa todos los campos obligatorios.");
    return; // Detiene el envío
  }

  const datos = {
    nombre,
    idjugador,
    pais,
    redsocial,
    telefono,
    alias,
    reclutado,
    fecharegistro,
    referencia
  };

  console.log(datos);

  //nuestra app macros de googleesheels
  const url = "https://script.google.com/macros/s/AKfycbxdiYyRpPMvHCac1Og78Mnl5dnskscFskP7gxjKUJQp3fqOyTGyLd0hpKAe48BbcRe4/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
  .then(() => {
    alert("¡Registro enviado!");
    // Limpiar los campos del formulario después del envío exitoso
    document.getElementById("_input_type_text_3").value = "";
    document.getElementById("_input_2").value = "";
    document.getElementById("_input_3").value = "";
    document.getElementById("_input_4").value = "";
    document.getElementById("_input_5").value = "";
    document.getElementById("_input_6").value = "";
    document.getElementById("_input_type_text_4").value = "";
    document.getElementById("_input_type_date_1").value = "";
    document.getElementById("_input_type_text_5").value = "";

        // Limpiar los campos del formulario después del envío exitoso table
    document.getElementById("_input_7").value = "";
    document.getElementById("_input_8").value = "";
    document.getElementById("_input_9").value = "";
    document.getElementById("_input_10").value = "";
    document.getElementById("_input_11").value = "";
    document.getElementById("_input_12").value = "";
    document.getElementById("_input_type_text_1").value = "";
    document.getElementById("_input_type_date_0").value = "";
    document.getElementById("_input_type_text_2").value = "";

    // Limpiar los campos del formulario después del envío exitoso mobile
    document.getElementById("_input_13").value = "";
    document.getElementById("_input_14").value = "";
    document.getElementById("_input_15").value = "";
    document.getElementById("_input_16").value = "";
    document.getElementById("_input_17").value = "";
    document.getElementById("_input_18").value = "";
    document.getElementById("_input_type_text_").value = "";
    document.getElementById("_input_type_date_").value = "";
    document.getElementById("_input_type_text_0").value = "";
  })
  .catch(error => {
    alert("Error al enviar los datos: " + error);
  });
}

// Asignar la función a ambos botones
document.getElementById("_Button_").addEventListener("click", manejarClick);
document.getElementById("_Button_table_").addEventListener("click", manejarClick);
document.getElementById("_Button_mobilesdf_").addEventListener("click", manejarClick);

////////////////////////////////////////////////////////////////////////

///Cuando el usuario escriba en un campo en una vista (ej. desktop), los campos ocultos de otras vistas se actualizarán 
// en tiempo real. Así, si cambia a móvil, los datos ya estarán ahí sin necesidad de recargarlos ni reescribirlos.
  document.addEventListener('DOMContentLoaded', () => {
    // Lista de grupos de campos que representan lo mismo en distintas vistas
    const grupos = [
     ['_input_type_text_3', '_input_7', '_input_13'],
     ['_input_2', '_input_8', '_input_14'],
      ['_input_3', '_input_9', '_input_15'],
      ['_input_4', '_input_10', '_input_16','_input_type_email_'],
      ['_input_5', '_input_11', '_input_17'],
      ['_input_6', '_input_12', '_input_18'],
      ['_input_type_text_4', '_input_type_text_1', '_input_type_text_'],
      ['_input_type_date_1', '_input_type_date_0', '_input_type_date_'],
      ['_input_type_text_5', '_input_type_text_2', '_input_type_text_0']
    ];

    grupos.forEach(ids => {
      const inputs = ids.map(id => document.getElementById(id)).filter(Boolean);
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          inputs.forEach(other => {
            if (other !== input) {
              other.value = input.value;
            }
          });
        });
      });
    });
  });
