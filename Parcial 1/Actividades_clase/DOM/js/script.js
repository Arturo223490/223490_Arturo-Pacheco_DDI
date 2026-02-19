let contenido = document.querySelector("#contenedor_contenido");
const boton =document.querySelector("#boton");
let bandera = false;

function cambiarWidth(width){
    contenido.style.width = width;
}

function cambiarTamanio(ancho, alto) {
    contenido.style.width =ancho;
    contenido.style.height =alto;
} 

function cambiarColor(color) {
    contenido.style.background =color;
}

boton.addEventListener("click" , () => {
    if(bandera){
        cambiarColor("green");
        cambiarTamanio("500px", "1000px");
        bandera = false;
    }else{
        cambiarColor("red");
        cambiarTamanio("1000px", "500px");
        bandera = true;
    
    }
});

setInterval(cambiarTamanio, 1000);