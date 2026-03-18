const sideLinks = document.querySelectorAll(".sidebar-links .nav-link[data-view]");
const vistaInicio = document.getElementById("vistaInicio");
const vistaUsuarios = document.getElementById("vistaUsuarios");
const vistaSoporte = document.getElementById("vistaSoporte");
const vistaContacto = document.getElementById("vistaContacto");

const vistas = {
  inicio: vistaInicio,
  usuarios: vistaUsuarios,
  soporte: vistaSoporte,
  contacto: vistaContacto,
};

function mostrarVista(nombreVista) {
  Object.entries(vistas).forEach(([clave, elemento]) => {
    if (!elemento) {
      return;
    }
    elemento.classList.toggle("d-none", clave !== nombreVista);
  });

  sideLinks.forEach((link) => {
    const activa = link.dataset.view === nombreVista;
    link.classList.toggle("active", activa);
  });
}

sideLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarVista(link.dataset.view);
  });
});

mostrarVista("inicio");
