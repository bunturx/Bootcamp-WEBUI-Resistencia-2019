const HOST =  "https://swapi.co";
const ENDPOINT_FILMS= "/api/films/"; 

let appLication = function (){
    console.log("Hola Mundo");
    //Request al server para obtener la pelicula
    axios.get(`${HOST} ${ENDPOINT_FILMS}`)
        .then(function)
}


window.addEventListener('load', function(){
 this.appLication();
})