
// ELEMENTOS DE LA PÁGINA

const botonAbrir = document.getElementById("abrir");
const caja = document.getElementById("caja");

const inicio = document.getElementById("inicio");
const jardin = document.getElementById("jardin");

const flor = document.getElementById("flor");
const imagenFlor = document.getElementById("imagenFlor");

const nombreFlor = document.getElementById("nombreFlor");
const cancion = document.getElementById("cancion");
const frase = document.getElementById("frase");

const contador = document.getElementById("contador");
const reproductor = document.getElementById("reproductor");

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");


// INFORMACIÓN DE LAS TRES PEONÍAS

const flores = [

    {
        imagen: "imagenes/peonia-rosada.png",
        nombre: "Peonía rosada",
        cancion: "Tus Vueltas - Milo J",
        frase: "Hay cosas pequeñas que terminan convirtiéndose en algo extraordinario.",
        youtube: "https://www.youtube.com/embed/SOXYr6CsUJU?si=7YxpvxNGmLtGOFmw"
    },

    {
        imagen: "imagenes/peonia-roja.png",
        nombre: "Peonía roja",
        cancion: "Hecha pa' mí - Grupo Frontera",
        frase: "Algunas personas hacen que hasta los días más comunes tengan algo especial.",
        youtube: "https://www.youtube.com/embed/y9qtkAjxU1w?si=M45JKC9b7wQy1LiL"
    },

    {
        imagen: "imagenes/peonia-blanca.png",
        nombre: "Peonía blanca",
        cancion: "Querida - Piso 21",
        frase: "No hace falta entender todas las estrellas para disfrutar de su luz.",
        youtube: "https://www.youtube.com/embed/j2w2Os3IVBA?si=0GT5QCWsUhlo9fr8"
    }

];


// CONTROL DE LA FLOR ACTUAL

let florActual = 0;


// ABRIR EL REGALO

botonAbrir.addEventListener("click", () => {

    botonAbrir.disabled = true;

    caja.classList.add("abierta");

    setTimeout(() => {

        inicio.classList.add("oculto");

        jardin.classList.remove("oculto");

        mostrarFlor();

    }, 1800);

});


// MOSTRAR FLOR Y CANCIÓN

function mostrarFlor() {

    const seleccionada = flores[florActual];


    // CAMBIAR IMAGEN

    flor.classList.remove("palpitar");

    imagenFlor.src = seleccionada.imagen;

    imagenFlor.alt = seleccionada.nombre;


    // ACTIVAR ANIMACIÓN DE LATIDO

    void imagenFlor.offsetWidth;

    flor.classList.add("palpitar");


    // ACTUALIZAR INFORMACIÓN

    nombreFlor.textContent = seleccionada.nombre;

    cancion.textContent = seleccionada.cancion;

    frase.textContent = seleccionada.frase;

    contador.textContent =
        `${florActual + 1} / ${flores.length}`;


    // CAMBIAR REPRODUCTOR

    reproductor.innerHTML = "";

    const iframe = document.createElement("iframe");

    iframe.src = seleccionada.youtube + "&autoplay=1";

    iframe.width = "560";

    iframe.height = "315";

    iframe.title = "Reproductor de YouTube";

    iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframe.referrerPolicy =
        "strict-origin-when-cross-origin";

    iframe.setAttribute("allowfullscreen", "");

    reproductor.appendChild(iframe);

}


// FLOR ANTERIOR

botonAnterior.addEventListener("click", () => {

    florActual--;

    if (florActual < 0) {

        florActual = flores.length - 1;

    }

    mostrarFlor();

});


// FLOR SIGUIENTE

botonSiguiente.addEventListener("click", () => {

    florActual++;

    if (florActual >= flores.length) {

        florActual = 0;

    }

    mostrarFlor();

});
