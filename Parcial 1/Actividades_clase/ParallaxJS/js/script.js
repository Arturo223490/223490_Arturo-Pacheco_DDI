const titulo = document.querySelector("#titulo");
const squid = document.querySelector("#squid");

window.addEventListener("scroll", (event)=>{
 titulo.style.right = window.scrollY * 3 + "px";
 squid.style.right = window.scrollY * 2 + "px";
})