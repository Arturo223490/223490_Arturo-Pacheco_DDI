const nombreNuevo = document.querySelector('#nombre');
const correoNuevo = document.querySelector('#correo');
const passNuevo = document.querySelector('#pass');
const btnActualizar = document.querySelector('#actualizar');


const userData = JSON.parse(localStorage.getItem('storedUser'));


if (userData) {
    nombreNuevo.value = userData.name;
    correoNuevo.value = userData.email;
    passNuevo.value = userData.pass;


    if (userData.isAdmin === "yes") {
        document.querySelector('#siAdmin').checked = true;
    } else {
        document.querySelector('#noAdmin').checked = true;
    }
} else {

    window.location.href = "index.html";
}


btnActualizar.addEventListener('click', () => {

    const selectedAdmin = document.querySelector('input[name="admin"]:checked');

    const updatedUser = {
        name: nombreNuevo.value,
        email: correoNuevo.value,
        pass: passNuevo.value,
        isAdmin: selectedAdmin ? selectedAdmin.value : "no"
    };

    localStorage.setItem('storedUser', JSON.stringify(updatedUser));
    alert("¡Perfil Actualizado!");
});


document.querySelector('#btnNavbarLogout').addEventListener('click', () => {
    window.location.href = "index.html";
});