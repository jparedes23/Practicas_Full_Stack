const listPlayers = document.querySelector("#list-players");
const urlApi = "http://127.0.0.1:4000/jugadores-balon-oro";

async function renderPlayers(){
    try {
        const response = await fetch(urlApi);
        const data = await response.json();

        data.array.forEach((player) => {
            listPlayers.innerHTML += `<my-card title=${player.name} img=${player.img} message="El ganador del año ${player.year}"></my-card>`;
        });
    } catch (error) {
        
    }
}