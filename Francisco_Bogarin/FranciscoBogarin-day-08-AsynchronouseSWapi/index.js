/* Variables to handle html tags */
let selectMenu = document.getElementById('selectMenu')
let filmTitle = document.getElementById('film-title')
let charactersInfo = document.getElementById('characters-info')
let planetInfo = document.getElementById('planet-info')
let starshipInfo = document.getElementById('starship-info')
let vehicleInfo = document.getElementById('vehicle-info')
let specieInfo = document.getElementById('specie-info')
var data

fetch(`https://swapi.co/api/films/`)
.then((response => {head = response;response.json().then((response)=>{
    data = response
    obtainFilmsNames(data)
    })
}))


//Obtains Data Dynamically to write in select options in case of a new film been added
function obtainFilmsNames(data){
    for (let f = 0; f < data.results.length; f++) { 
        opt = document.createElement('option')
        opt.setAttribute('value', data.results[f].title)
        opt.setAttribute('id', f+1)
        let text = document.createTextNode(data.results[f].title)
        opt.appendChild(text)
        selectMenu.appendChild(opt)       
    }
}

var character, planets,vehicles,starships,species
async function obtainFilmsDataFromSelection(){
        /* obtains film data by changing selection menu option */
        index = selectMenu.selectedIndex-1
        filmTitle.innerHTML = selectMenu.value
        characters = data.results[index].characters
        planets = data.results[index].planets
        vehicles = data.results[index].vehicles
        starships = data.results[index].starships
        species = data.results[index].starships
        /* Erase data in HTML to replace with newone fetched */
        charactersInfo.innerHTML = null
        planetInfo.innerHTML  = null
        starshipInfo.innerHTML = null
        vehicleInfo.innerHTML = null
        specieInfo.innerHTML  = null
        /* functions used to bring default data to forms of first characters planets
        starships and etc... */
        await displayCharactersInfo(characters[0])
        await displayPlanetInfo(planets[0])
        await displayStarshipInfo(starships[0])
        await displayVehiclesInfo(vehicles[0])
        await displaySpecieInfo(species[0])
}

/* Next a bunch of funtcions to bring data from the server
 by requesting with an URL provided in json file */
function displayCharactersInfo(character){
    fetch(character)
    .then((response => {response.json().then((response)=>
        {
        let key = Object.keys(response)
        let value = Object.values(response)
            for (let i = 0; i < 8; i++) {
                charactersInfo.innerHTML += `${key[i]}: ${value[i]} <br>`
            }
        })
    }))
}

function displayPlanetInfo(planet){
    if(planet === undefined){console.log('no hay mas planetas')}
    else{
        fetch(planet)
        .then((response => {response.json().then((response)=>
            {
            let key = Object.keys(response)
            let value = Object.values(response)
                for (let i = 0; i < 8; i++) 
                {
                    planetInfo.innerHTML += `${key[i]}: ${value[i]} <br>`
                }
            })
        }))
    }
}
function displayStarshipInfo(starship){
    fetch(starship)
    .then((response => {response.json().then((response)=>{
        let key = Object.keys(response)
        let value = Object.values(response)
        for (let i = 0; i < 12; i++) {
            starshipInfo.innerHTML += `${key[i]}: ${value[i]} <br>`
        }
    })
}))
}
function displayVehiclesInfo(vehicle){
    fetch(vehicle)
    .then((response => {response.json().then((response)=>{
        let key = Object.keys(response)
        let value = Object.values(response)
        for (let i = 0; i < 10; i++) {
            vehicleInfo.innerHTML += `${key[i]}: ${value[i]} <br>`
        }
    })
}))
}

function displaySpecieInfo(specie){
    fetch(specie)
    .then((response => {response.json().then((response)=>{
        let key = Object.keys(response)
        let value = Object.values(response)
        for (let i = 0; i < 8; i++) {
            specieInfo.innerHTML += `${key[i]}: ${value[i]} <br>`
        }
    })
}))
}
/* Counter used as an index of arrays with everydata obtained so you can change page info */
let countActualPage = 0
/* Function to print next data by clicking show me more and evaluate if this counter is bigger so
it don't mess de previous data with a undefined result */
function displayNextData(){
    countActualPage++
    if(countActualPage > starships.length){} 
    else{
        starshipInfo.innerHTML = null
        displayStarshipInfo(starships[countActualPage])
    }
    if(countActualPage > planets.length){}
    else{
        planetInfo.innerHTML  = null
        displayPlanetInfo(planets[countActualPage])
    }
    if(countActualPage > characters.length){}
    else{
        charactersInfo.innerHTML = null
        displayCharactersInfo(characters[countActualPage])
    }
    if(countActualPage > vehicles.length){}
    else{
        vehicleInfo.innerHTML = null
        displayVehiclesInfo(vehicles[countActualPage])
    }
    if(countActualPage > species.length){}
    else{
        specieInfo.innerHTML  = null
        displaySpecieInfo(species[countActualPage])
    }
}