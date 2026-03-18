const registroForm = document.getElementById("registroForm");
const nombreInput = document.getElementById("nombre");
const direccionInput = document.getElementById("direccion");
const ciInput = document.getElementById("ci");
const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
const soloNumerosRegex = /^\d+$/;

function setEstadoBootstrap(input, esValido) {
  input.classList.toggle("is-valid", esValido);
  input.classList.toggle("is-invalid", !esValido);
}

function validarNombreCompleto() {
  const valor = nombreInput.value.trim();
  const esValido = valor.length > 0 && soloLetrasRegex.test(valor);
  setEstadoBootstrap(nombreInput, esValido);
  return esValido;
}

function validarDireccion() {
  const valor = direccionInput.value.trim();
  const esValido = valor.length >= 5;
  setEstadoBootstrap(direccionInput, esValido);
  return esValido;
}

function validarCi() {
  ciInput.value = ciInput.value.replace(/\D/g, "");
  const valor = ciInput.value.trim();
  const esValido = valor.length > 0 && soloNumerosRegex.test(valor);
  setEstadoBootstrap(ciInput, esValido);
  return esValido;
}

nombreInput.addEventListener("input", () => {
  nombreInput.value = nombreInput.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g, "");
  validarNombreCompleto();
});

if (direccionInput) {
  direccionInput.addEventListener("input", validarDireccion);
}

if (ciInput) {
  ciInput.addEventListener("input", validarCi);
}

if (registroForm) {
  registroForm.addEventListener("submit", (event) => {
    const nombreOk = validarNombreCompleto();
    const direccionOk = validarDireccion();
    const ciOk = validarCi();

    if (!(nombreOk && direccionOk && ciOk)) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
}
