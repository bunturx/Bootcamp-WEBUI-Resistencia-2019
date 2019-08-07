const HOST = "https://swapi.co";
const ENDPOINT_FILMS = "/api/films/";


let app = async function(){
    const filmSelect = document.querySelector("#films");
    const filmDiv = document.querySelector(".film-info")
    //We get the Data Array from "films api"
    //const {data} = await axios.get(`${HOST}${ENDPOINT_FILMS}`);

    try {
        const {data} = await axios.get(`${HOST}${ENDPOINT_FILMS}`);
        filmsInfo =  data.results;
    }
    catch(e){
        alert(e);
    }
    //For each data we create an option for the select.
    filmsInfo.forEach(function(film, index){
        let option = document.createElement("option");
        option.id = index;
        option.textContent = film.title;
        filmSelect.appendChild(option)
    })

    //Now we create an event listener for each option.
    filmSelect.addEventListener('click',function(e){
        reset();
        let filmSelected = filmsInfo[e.target.selectedOptions[0].id];
        for (let atribute in filmSelected){
            let p = document.createElement("p");
            if (Array.isArray(filmSelected[atribute])){
                p.textContent =  `${atribute}:  ${filmSelected[atribute][0]}`
            }else p.textContent = `${atribute}:  ${filmSelected[atribute]}`
            p.className = "p"
            filmDiv.appendChild(p)
        }
        
    })
    //Reset the div film info when we select a new one.
    function reset(){
        let paragraphs = document.querySelectorAll(".p");
        paragraphs.forEach(function(p){
            p.parentNode.removeChild(p)
        })
    }

//app scope ends.
}


window.addEventListener('load', function(){
    app();
})