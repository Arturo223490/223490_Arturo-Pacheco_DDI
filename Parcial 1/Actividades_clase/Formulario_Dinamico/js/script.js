const nombre = document.querySelector("#input-txt-nombre");
const apellido = document.querySelector("#input-txt-apellido");
const botonConfi = document.querySelector("#btn-confi");

botonConfi.addEventListener("click",(e)=>{
    e.preventDefault();
    const usuario= new Usuario(nombre.value,apellido.value);
    console.log(usuario);
    const nombre_info = document.createElement("h2"); 
    nombre_info.textContent = usuario.nombre;
    document.body.appendChild(nombre_info);  
});

function cambiarNumero(event){
        console.log(event.target.value);
        const contenido = document.querySelector("#contenedor_correos");
        contenido.innerHTML = ""; //Limpia la etiqueta antes de empezar
        
        for(let i =1; i <= event.target.value; i++){
            const htmlAgregar= `<label for="correo-${i}">Ingrese El Correo ${i}</label>
            <input type="email" name="correo-${i}" id="correo-${i}">
            <br>`;
            contenido.innerHTML += htmlAgregar;
        }
}



class Usuario{
    constructor(nom, ape){
        this.nombre= nom;
        this.apellido= ape;
    }
}