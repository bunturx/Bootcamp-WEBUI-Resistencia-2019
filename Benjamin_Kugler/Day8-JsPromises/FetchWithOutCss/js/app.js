const URL = "https://swapi.co/api/films/"
let app =  async function(){
    const filmSelect = document.querySelector("#film");

    const filmsInfo = await getFilms(URL);


    //For each data we create an option for the select.
        filmsInfo.forEach(function(film, index){
            let option = document.createElement("option");
            option.id = index;
            option.textContent = film.title;
            filmSelect.appendChild(option)
        })

    //Now we create an event listener for each option.
    filmSelect.addEventListener('click',async function(e){
        
        resetScreen();
        let filmSelected = filmsInfo[e.target.selectedOptions[0].id];
        document.querySelector(".title").textContent = filmSelected.title
        for (let atribute in filmSelected){
            let descriptionDiv = document.querySelector('.'+atribute)
            if (Array.isArray(filmSelected[atribute])){
                let url = filmSelected[atribute][0]
                let descriptions = await getDescriptions(url);
                for (let element in descriptions){
                    if (!Array.isArray(descriptions[element])){
                        descriptionDiv.innerHTML += `${element}: ${descriptions[element]} `+ "<br>"
                    }
                }
            }
            
        }
        
        
    })
    function resetScreen(){
        let descriptions = document.querySelectorAll(".description");
        for (let element in descriptions){
                descriptions[element].textContent = "";
        }
        return
    }


    //app scope ends
}

async function getDescriptions(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    }
    catch(e){
        const error = "Empty"
        return error
    }
}

//Async function to get every film in the api.
async function getFilms(url){
    try {
        const response = await fetch(url)
        const data  = await response.json();
        const result = data.results;
        return result
    }
    catch(e){
        alert(e)
    }
}



window.addEventListener('load',function(){
    app();
})