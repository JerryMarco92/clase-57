
//primera parte

async function rickYmorty() {
    let respuesta = await fetch("https://rickandmortyapi.com/api/character");
    let datos = await respuesta.json();

    let personajes = await datos.results;
    

    let cards = document.getElementById("cards");

    for (let personaje of personajes){
        let card = document.createElement("div");
        cards.appendChild(card);
        card.innerHTML =`
        <h1>${personaje.name}</h1>
        </br>
        <img src="${personaje.image}" alt="imagen de ${personaje.name}">
        <p>Species: ${personaje.species} </br> ${personaje.status}</p>`

        console.log(datos);
    }
}

rickYmorty();





/*segunda parte


let cards = document.getElementById(cards);

let card = document.createElement("div");

cards.appendChild(card);
*/