const listaCanciones = ["Billie Jean", "Lose Yourself", "Smooth Criminal", "Beat it", "Sorry mama"];

const listaArtistas = ["Michael Jackson", "Eminem", "Michael Jackson", "Michael Jackson", "Eminem"];

const divListaCanciones = document.getElementById("ListaCanciones");
let idCancionActual = 0;

listaCanciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);

    const song = listaCanciones[idx];
    const artist = listaArtistas[idx];

    divListaCanciones.innerHTML += `<div id="song_${idx}" class="Lista-cancion">
                                ${song} <br /> ${artist}
                                </div>`;

});

//Ejercicio 4
const btnTema3 = document.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    console.log("Lista canciones: ", listaCanciones[2]);
    console.log(`Lista artistas: ", ${listaArtistas[2]}`);

});

//Ejercicio 5
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});

//Ejercicio 6
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong");

divsCanciones.forEach((divCancion, idx) => {
    divCancion.addEventListener("click", (event) => {

        // idCancionActual= i;
        imprimirReproduciendo(idx);

    });

});

function imprimirReproduciendo(idCancionActual) {
    const song = listaCanciones[idCancionActual];
    const artist = listaArtistas[idCancionActual];
    console.log("Artista: " + artist + " - canción: " + song);

    divPlayingSong.innerHTML = `<div>
                                    canción: ${song} <br/>
                                    artista: ${artist}
                                </div>`;
}

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");


btnSig.addEventListener("click", () => {
    idCancionActual++;
    imprimirReproduciendo();
});

btnAnt.addEventListener("click", () => {
    idCancionActual--;
    imprimirReproduciendo();
});



