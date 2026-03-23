const login = document.querySelector('#login');
const registro = document.querySelector('#registro');
const btnRegistro = document.querySelector('#alRegistro');
const btnLogin = document.querySelector('#alLogin');

// Toggle Logic
btnRegistro.addEventListener('click', () => {
    login.classList.add('hidden');
    registro.classList.remove('hidden');
});

btnLogin.addEventListener('click', () => {
    registro.classList.add('hidden');
    login.classList.remove('hidden');
});

// Register Logic - Fixed selector to match HTML
document.querySelector('#formularioRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const correo = document.querySelector('#email').value;
    const password = document.querySelector('#contra').value;
    const confiContra = document.querySelector('#confiContra').value;
    
    // Logic to get the value of the selected radio button (matches name="admin")
    const administrador = document.querySelector('input[name="admin"]:checked').value;

    if (password !== confiContra) {
        alert("Las contraseñas no coinciden!");
        return;
    }

    const usuario = { name: nombre, email: correo, pass: password, isAdmin: administrador };
    localStorage.setItem('storedUser', JSON.stringify(usuario));

    alert("Cuenta Creada!");
    btnLogin.click(); // Return to login view
});

// Login Logic
document.querySelector('#formularioLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const correoRegistrado = document.querySelector('#correo').value;
    const passRegistrado = document.querySelector('#password').value; // Matches fixed ID

    const userData = JSON.parse(localStorage.getItem('storedUser'));

    if (userData && userData.email === correoRegistrado && userData.pass === passRegistrado) {
        window.location.href = "catalogo.html"; 
    } else {
        alert("Correo o Contraseña Incorrecto");
    }
});

// Logout Button Logic
document.querySelector('#logOut').addEventListener('click', () => {
    window.location.href = "index.html";
});