async function searchPokemon(){
    let poke=document.getElementById("pokemonInput").value
    poke = poke.toLowerCase()
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const data = await response.json();
        console.log(data);
        displayPokemonInfo(data)
    } catch (error) {
        displayError();
    }
}

function displayPokemonInfo(pokeData) {
    const pokemonInfoElement = document.getElementById('pokemonInfo');
        pokemonInfoElement.innerHTML = `
        <h2>Nombre: ${pokeData.name}</h2>
        <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
        <p>Altura: ${pokeData.height}</p>
        <p>Ancho: ${pokeData.weight}</p>
        `
}

function displayError() {
    const pokemonInfoElement = document.getElementById('pokemonInfo');
    pokemonInfoElement.innerHTML = `<p>No se encontro información del pokemon</p>`
}


function hol(){
    
}

