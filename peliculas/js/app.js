// const API = 'movies-app1.p.rapidapi.com'

// const xhr = new XMLHttpRequest();

// function Request(){
//     if (this.readyState === 4 && this.status === 200){
//         //0 = UNSET, no se ha llamado al metodo open
//         //1 = OPENED, se ha llamado al metodo open.
//         //2 = HEADERS_RECIEVED, se esta llamando al metodo send()
//         //3 = LOADING, esta cargando, es decir, esta reciviendo la respuesta
//         //4 = DONE,  se ha compleado todo
//         console.log(this.respose)
//     }
    
// }

// xhr.addEventListener("load", onRequest)
// xhr.open("GET", `${API}`/search)


const btnGetmovie = document.querySelector("#get-movie");
const container_js = document.querySelector(".container-js")

const urlmovies =  "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

btnGetmovie.onclick = async function(){

    const Responde = await fetch(urlmovies);
    // console.log(Responde)
//parse de json a un objeto
    const data = await Responde.json();

    // console.log(data.Search) //Search biene de la API
    readmovie(data.Search)
    
}

function readmovie(movies){
    container_js.innerHTML ="";
    movies.forEach((movie, index) => {
        container_js.innerHTML +=  `<div class="card">
        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300${
          index + 1
        }.jpg" alt="" /> 
        <h4>${movie.Title}</h4>
        <p>
          ${movie.Year}
        </p>
      </div>
    `;
    });
}