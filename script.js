console.log("JS conectado");

const dpiInput = document.getElementById("dpi");
const sensInput = document.getElementById("sens");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {

    const dpi = parseFloat (dpiInput.value);
    const sens = parseFloat (sensInput.value);

    if (dpi === "" || sens === "") {
        resultado.textContent = "Ingresa valores válidos";
        return;
    }

    const edpi = dpi * sens;

    resultado.textContent = "Tu eDpi es: " + edpi; 

    localStorage.setItem("dpi", dpi);
    localStorage.setItem("sens", sens);
    localStorage.setItem("edpi", edpi); 

});

const savedDpi = localStorage.getItem("dpi");
const savedSens = localStorage.getItem("sens");
const savedEdpi = localStorage.getItem("edpi");

if(savedDpi && savedSens) {
    dpiInput.value = savedDpi;
    sensInput.value = savedSens; 
    resultado.textContent = "Tu eDpi guardado es: " + savedEdpi;
}