// evento al cargar el dom y cargar el contenido del textarea

const contenido = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

document.addEventListener("DOMContentLoaded", function() { 
    console.log("Contenido del DOM cargado");
    // Cargar el contenido inicial en el textarea
    document.getElementById("origen").value = contenido;
    // Agregar el evento de cambio al textarea

    // Cambiar el estado de disabled a false para los inputs y botones
    const inputs = document.querySelectorAll('input[type="button"], button');
    for (let i = 0; i < inputs.length; i++) {
       inputs[i].removeAttribute("disabled");
        }



    // Funcionalidad del boton "Reemplazar"
    const btnReemplazar = document.getElementById("btn-reemplazar");
    const destino = document.getElementById("destino");
    // Agregar el evento de clic al botón "Reemplazar"
    function reemplazarTexto() {
        destino.innerHTML = contenido;
    }
    // Agregar el evento de clic al botón "Reemplazar"
    btnReemplazar.addEventListener("click", reemplazarTexto);


    
    // Funcionalidad del boton agregar
    const btnAgregar = document.getElementsByClassName("btn-agregar")[0];
    function agregarTexto() {
        destino.innerHTML += contenido;
    }
    // Agregar el evento de clic al botón "Agregar"
    btnAgregar.addEventListener("click", agregarTexto);


    // Funcionalidad del boton "Agregar 5 veces" 

    const btnAgregar5 = document.getElementsByClassName("btn-agregar")[1];
    function agregarTexto5() {
        for (let i = 0; i < 5; i++) {
            destino.innerHTML += contenido;
        }
    }
    // Agregar el evento de clic al botón "Agregar 5 veces"
    btnAgregar5.addEventListener("click", agregarTexto5);


    // Funcionalidad del boton "Agregar 10 veces"
    const btnAgregar10 = document.getElementsByClassName("btn-agregar")[2];
    function agregarTexto10() {
        for (let i = 0; i < 10; i++) {
            destino.innerHTML += contenido;
        }
    }
    // Agregar el evento de clic al botón "Agregar 10 veces"
    btnAgregar10.addEventListener("click", agregarTexto10);

    
    
    //Boton "Agregar n veces"
    const btnAgregarN = document.getElementsByClassName("btn-agregar")[3];
    function agregarTextoN() {
        const nVeces = prompt("¿Cuántas veces quieres agregar el contenido?");
        for (let i = 0; i < nVeces; i++) {
            destino.innerHTML += contenido;
        }
    }
    // Agregar el evento de clic al botón "Agregar n veces"
    btnAgregarN.addEventListener("click", agregarTextoN);

    

    // Funcionalidad del boton "Limpiar"
    const btnLimpiar = document.getElementsByClassName("btn-vaciar")[0];
    function limpiarTexto() {
        destino.innerHTML = ""; // Limpia el contenido del div de destino
    }
    // Agregar el evento de clic al botón "Limpiar"
    btnLimpiar.addEventListener("click", limpiarTexto);


    // Funcionalidad del boton "convertir en mayusculas"
    const btnMayusculas = document.getElementsByClassName("btn-convertir-a-mayusculas")[0];
    function convertirMayusculas() {
        destino.innerHTML = destino.innerHTML.toUpperCase(); // Convierte el contenido a mayúsculas
    }
    // Agregar el evento de clic al botón "convertir en mayusculas" 
    btnMayusculas.addEventListener("click", convertirMayusculas);

    
    
    // Funcionalidad del boton "convertir en minusculas"
    const btnMinusculas = document.getElementsByTagName("button")[0];
    function convertirMinusculas() {
        destino.innerHTML = destino.innerHTML.toLowerCase(); // Convierte el contenido a minúsculas
    }
    // Agregar el evento de clic al botón "convertir en minusculas"
    btnMinusculas.addEventListener("click", convertirMinusculas);

   
   
    // Agregar "Ok" a todos los elementos li 
    const listaOk = "[Ok]";

    const lista = document.querySelectorAll("li");
    for (let i = 0; i < lista.length; i++) {
        lista[i].prepend(listaOk); // Agrega "Ok" a cada elemento li al principio del contenido
    }
    
    




}
);




