import {Linea,Cuadrado,Circulo,Triangulo,Trazo} from "./figuras.js";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let herramienta = "pincel";
let dibujando = false;
let startX = 0;
let startY = 0;
let colorLinea = "#000000";
let colorRelleno = "#ff0000";
let grosor = 5;
let elementos = [];
let puntosTrazo = [];
const botones = document.querySelectorAll(".botones");

function activarBoton(id, tool) { 
    botones.forEach(btn => { btn.classList.remove("activo");});
    document.querySelector(id).classList.add("activo");
    herramienta = tool;
}

document.querySelector("#btn_pincel").addEventListener("click", () => activarBoton("#btn_pincel", "pincel"));
document.querySelector("#btn_linea").addEventListener("click", () => activarBoton("#btn_linea", "linea"));
document.querySelector("#btn_cuadro").addEventListener("click", () => activarBoton("#btn_cuadro", "cuadro"));
document.querySelector("#btn_circulo").addEventListener("click", () => activarBoton("#btn_circulo", "circulo"));
document.querySelector("#btn_triangulo").addEventListener("click", () => activarBoton("#btn_triangulo", "triangulo"));
document.querySelector("#btn_borrador").addEventListener("click", () => activarBoton("#btn_borrador", "borrador"));

document.querySelector("#linea").addEventListener("input", (e) => {colorLinea = e.target.value;});
document.querySelector("#relleno").addEventListener("input", (e) => {colorRelleno = e.target.value;});
document.querySelector("#grozorLinea").addEventListener("input", (e) => {grosor = e.target.value;});

canvas.addEventListener("mousedown", iniciar);
canvas.addEventListener("mousemove", dibujar);
canvas.addEventListener("mouseup", terminar);

function iniciar(e) {
    dibujando = true;
    startX = e.offsetX;
    startY = e.offsetY;
    puntosTrazo = [];

    if (herramienta === "pincel" || herramienta === "borrador") 
    {
        puntosTrazo.push({x: startX, y: startY});
    }
}


function dibujar(e) {

    if (!dibujando) return;

    if (herramienta === "pincel" || herramienta === "borrador") 
    {
        puntosTrazo.push({x: e.offsetX, y: e.offsetY});
        Renderizar();
    }
}


function terminar(e) {

    if (!dibujando) return;

    dibujando = false;
    const endX = e.offsetX;
    const endY = e.offsetY;
    let figura;

    if (herramienta === "pincel") 
    {
        figura = new Trazo(puntosTrazo,colorLinea,grosor);
    }

    else 
    
    if (herramienta === "borrador") 
    {
        figura = new Trazo(puntosTrazo, "white", grosor);
    }

    else if (herramienta === "linea") {

        figura = new Linea(startX,startY,endX,endY,colorLinea,colorRelleno,grosor);
    }

    else if (herramienta === "cuadro") {

        figura = new Cuadrado(startX,startY,endX,endY,colorLinea,colorRelleno,grosor);
    }

    else if (herramienta === "circulo") {

        figura = new Circulo(startX,startY,endX,endY,colorLinea,colorRelleno,grosor);
    }

    else if (herramienta === "triangulo") {

        figura = new Triangulo(startX,startY,endX,endY,colorLinea,colorRelleno,grosor);
    }

    elementos.push(figura);

    Renderizar();
}

function Renderizar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < elementos.length; i++) 
    {
        elementos[i].Dibujar(ctx);
    }

    if (dibujando && (herramienta === "pincel" || herramienta === "borrador")) 
    {
        const preview = new Trazo(puntosTrazo,herramienta === "borrador"? "white" : colorLinea,grosor);
        preview.Dibujar(ctx);
    }
}

document.querySelector("#btn_rojo")
    .addEventListener("click", filtroRojo);

document.querySelector("#btn_verde")
    .addEventListener("click", filtroVerde);

document.querySelector("#btn_azul")
    .addEventListener("click", filtroAzul);

document.querySelector("#btn_negativo")
    .addEventListener("click", filtroNegativo);

function aplicarFiltro(callback) {

    const imgData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) 
    {

        callback(data, i);
    }

    ctx.putImageData(imgData, 0, 0);
}

function filtroRojo() {

    aplicarFiltro((data, i) => {data[i] += 80;});
}

function filtroVerde() 
{
    aplicarFiltro((data, i) => {data[i + 1] += 80;});
}

function filtroAzul() 
{
    aplicarFiltro((data, i) => {data[i + 2] += 80; });
}

function filtroNegativo() 
{
    aplicarFiltro((data, i) => {data[i] = 255 - data[i];data[i + 1] = 255 - data[i + 1];data[i + 2] = 255 - data[i + 2];});
}

document.querySelector("#btn_limpiar")
    .addEventListener("click", () => {
        elementos = [];
        ctx.clearRect(0,0,canvas.width,canvas.height);
    });

document.querySelector("#btn_pincel").classList.add("activo");