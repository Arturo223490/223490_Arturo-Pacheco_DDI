const userData = JSON.parse(localStorage.getItem("storedUser"));

// Protect page
if (!userData) {
    window.location.href = "index.html";
}

// Show admin section
if (userData.isAdmin === "yes") {
    const adminDiv = document.querySelector("#admin");
    if(adminDiv) adminDiv.classList.remove("hidden");
}

function cargar() {
    const contenedor = document.querySelector("#contenedor");
    const games = JSON.parse(localStorage.getItem("games")) || [];

    contenedor.innerHTML = "";

    if (games.length === 0) {
        contenedor.innerHTML = "<p>Nada en ek catalogo.</p>";
        return;
    }

    games.forEach(game => {
        const juego = `
            <div class="juego">
                <h3>${game.title}</h3>
                <p><strong>Género:</strong> ${game.genre}</p>
            </div>
        `;
        contenedor.innerHTML += juego;
    });
}

const jsonInput = document.querySelector("#jsonInput");
const btnImportar = document.querySelector("#importar");

btnImportar.addEventListener("click", () => {
    jsonInput.click();
});

jsonInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const nuevoCatalogo = JSON.parse(event.target.result);
            localStorage.setItem("games", JSON.stringify(nuevoCatalogo));
            cargar();
            alert("Catálogo actualizado.");
        } catch (error) {
            alert("Error: Catalogo invalido.");
        }
    };
    reader.readAsText(file);
});

// FIXED: ID now matches HTML
document.querySelector("#btnLogOut").addEventListener("click", () => {
    window.location.href = "index.html";
});

window.addEventListener("load", () => {
    datosInicio();
    cargar();
});

function datosInicio() {
    const guardados = localStorage.getItem("games");
    if (!guardados) {
        const juegosInicio = [
            { title: "The Legend of Zelda", genre: "Adventure" },
            { title: "Super Mario Odyssey", genre: "Platformer" },
            { title: "Pokémon Scarlet", genre: "RPG" }
        ];
        localStorage.setItem("games", JSON.stringify(juegosInicio));
    }
}