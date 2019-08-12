const HOST =  "https://swapi.co";
const ENDPOINT_FILMS= "/api/films/"; 

let appLication = function (){
    console.log("Hola Mundo");
    const filmRequest = document.querySelector('#films')
    let filmRequest = [];
    //Request al server para obtener la pelicula
    axios.get(`${HOST} ${ENDPOINT_FILMS}`)
        .then(function(response){
                //Cuando obtenemos la pelicula cargamos las options al select
                const {data} = response;
                filmRequest = data.results;

                filmRequest.forEach(function (film,index){
                        let option = document.createElement("option");
                        option.textContent = film.title;
                        option.id = index;
                        filmSelect.appendChild(option);
                });
        })
        .catch(function (error){
                //Cuando haya un error tirara un alert
                console.log(error)
        });

    filmSelect.addEventListener('click', function(event){
            const filmDesc = document.querySelector('#description');
            console.log (filmRequest[event.target.selectedOptions[0].id]);
    })
    //Lisener en el select para mostrar pelicula
    asyncFN();
}
let asyncFN = async function (){
        let asynVble = await axios.get (`${HOST} ${ENDPOINT_FILMS}`);
        console.log(asynVble);
}

window.addEventListener('load', function(){
    this.appLication();
})