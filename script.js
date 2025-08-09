let mensajeWhatsApp = "";
let medioTransporte = "";
let lugarElegido = "";
let fotoLugar = "";

function preguntarMotos() {
  Swal.fire({
    title: '¿Te gustan las motos?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      medioTransporte = "moto";
    } else {
      medioTransporte = "auto";
    }
    preguntarLugar();
  });
}

function preguntarLugar() {
  Swal.fire({
    title: '¿A dónde vamos?',
    input: 'select',
    inputOptions: {
      carlos_paz: 'Carlos Paz',
      parque: 'Parque',
      otro: 'Otro lugar'
    },
    inputPlaceholder: 'Elegí un lugar',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      if (result.value === 'carlos_paz') {
        lugarElegido = "Carlos Paz";
        fotoLugar = "https://pbs.twimg.com/media/DJzAc41WAAAbM-j.jpg:large";
        mostrarPlan();
      } else if (result.value === 'parque') {
        lugarElegido = "Parque Sarmiento";
        fotoLugar = "https://mediaim.expedia.com/destination/2/264a4668e301936e9cb05b9bd8eb3ceb.jpg";
        mostrarPlan();
      } else if (result.value === 'otro') {
        Swal.fire({
          title: '¿Cuál es el lugar?',
          input: 'text',
          inputPlaceholder: 'Escribí el nombre del lugar'
        }).then((res) => {
          if (res.isConfirmed && res.value) {
            lugarElegido = res.value;
            // Podés poner una foto por defecto para "otro lugar"
            fotoLugar = "https://as1.ftcdn.net/jpg/04/26/42/16/1000_F_426421653_xTUNmQWKxAW7bjoNbARe2DJhkbKg6aku.jpg";
            mostrarPlan();
          }
        });
      }
    }
  });
}

function mostrarPlan() {
  document.getElementById("pantalla0").style.display = "none";
  document.getElementById("pantallaPlan").style.display = "block";

  document.getElementById("fotoPlan").src = fotoLugar;

  document.getElementById("textoPlan").textContent =
    `El plan es ir a ${lugarElegido} en ${medioTransporte} y tomar unos mates.`;

  mensajeWhatsApp =
    `Hola! El plan es ir a ${lugarElegido} en ${medioTransporte} y tomar unos mates 🧉🌅
`;
}

function enviarWhatsApp() {
  const telefono = "3516121498";
  const url = `https://wa.me/54${telefono}?text=${encodeURIComponent(mensajeWhatsApp)}`;
  window.open(url, "_blank");
}
