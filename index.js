async function searchEpisode() {
    let episodeNumber = document.getElementById("episodeInput").value;

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`);
        const data = await response.json();
        console.log(data);
        displayEpisodeInfo(data);
    } catch (error) {
        displayError();
    }
}

function displayEpisodeInfo(episodeData) {
    const episodeInfoElement = document.getElementById('episodeInfo');
    episodeInfoElement.innerHTML = `
        <h2>Nombre del episodio: ${episodeData.name}</h2>
        <p>Fecha de salida al aire: ${episodeData.air_date}</p>
        <p>Episodio: ${episodeData.episode}</p>
    `;
}

function displayError() {
    const episodeInfoElement = document.getElementById('episodeInfo');
    episodeInfoElement.innerHTML = `<p>No se encontro el numero del episodio</p>`;
}




