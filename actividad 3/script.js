
//primera parte

async function rickYmorty() {
    let respuesta = await fetch("https://rickandmortyapi.com/api/character");
    let datos = await respuesta.json();

    let personajes = await datos.results;
    

    let cards = document.getElementById("cards");

    for (let personaje of personajes){
        let card = document.createElement("div");
        cards.appendChild(card);

        console.log(personaje.name);
    }
}

rickYmorty();





/*segunda parte


let cards = document.getElementById(cards);

let card = document.createElement("div");

cards.appendChild(card);
*/