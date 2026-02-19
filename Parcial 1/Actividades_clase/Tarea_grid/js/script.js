
//Evento Mouseover
const box1 = document.getElementById("cuadro1");

box1.addEventListener("mouseover", function() {
    box1.style.backgroundColor = "purple";
});

box1.addEventListener("mouseout", function() {
    box1.style.backgroundColor = "yellow";
});


//Evento click
const box2 = document.getElementById("cuadro2");

box2.addEventListener("click", function() {
    box2.textContent = "Gracias.";
});

//Eventos MouseDown/Up
const box3 = document.getElementById("cuadro3");

box3.addEventListener("mousedown", function() {
    box3.style.transform = "scale(0.9)";
});

box3.addEventListener("mouseup", function() {
    box3.style.transform = "scale(1)";
});

//Evento Doubleclick
const box4 = document.getElementById("cuadro4");

box4.addEventListener("dblclick", function() {
    box4.textContent = " ";
});


//Evento onload
document.addEventListener("DOMContentLoaded", function() {
    const box6 = document.getElementById("cuadro6");
    box6.textContent = "Este mensaje sale porque ya cargo la pagina";
});