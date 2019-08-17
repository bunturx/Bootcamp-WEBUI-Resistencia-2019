var prueba = "prueba";
var loading = document.getElementById("loading");
var selectmoviebox = document.getElementById("selectmoviebox");
var selectmovie = document.getElementById("selectmovie");
var databox = document.getElementById("data-box");
var error_fetch = "Error. Intente mas Tarde...";
var error = document.getElementById("error");

var swapi = `https://swapi.co/api/`;


async function fetch_some_json(request){
	let data_return;
	data_return = await fetch(request)
		.then(function(response){
			return response.json();
		})
		.then(function(myjson) {
			let datos = myjson;
			return datos;
		})
		.catch(function(error) {
			return error_fetch;
		})
	return data_return;
}


async function fetch_movie_list(){
	let request = swapi +`films/`;
	let datos = await fetch_some_json(request);
	return datos.results;
}


async function fetch_something_with_url(url){
	let request = url;
	let datos = await fetch_some_json(request);
	return datos;
}




async function load_movie_list(){
	let movie_list = await fetch_movie_list();
	if(movie_list == error_fetch){
		error.textContent = movie_list;
	}
	else{
	movie_list.forEach(function(movie, i){
		console.log(movie);
		option = document.createElement("option");
		option.setAttribute('value', movie.url);
		console.log(i+1);
		option.appendChild(document.createTextNode(movie.title));
		selectmovie.appendChild(option);
	});	
	loading.classList.add("hidden");
	selectmoviebox.classList.remove("hidden");
	}
}


async function search_film(){
	/*revisar value select*/
	let indice = selectmovie.selectedIndex;
 	let value = selectmovie.options[indice].value;
	/*Buscar pelicula*/
	loading.classList.remove("hidden");
	let databoxfix = document.getElementById("data-box");
	if(databox.classList.contains("hidden")){
	}
	else{
		databoxfix.classList.add("hidden");
	}
	let movie = await fetch_something_with_url(value);
	/*cargar/mostrar datos resultado*/
	show_results(movie);
	loading.classList.add("hidden");
	databox.classList.remove("hidden");	
}

function show_results(movie){
	show_results_movie_data(movie);
	show_results_characters_data(movie.characters);
	show_results_planets_data(movie.planets);
}

function show_results_movie_data(movie){
	let moviebox = document.getElementById("movie-box");
	while(moviebox.firstChild) {
		moviebox.removeChild(moviebox.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = movie.title;
	moviebox.appendChild(title_h2);
}


/*Personajes*/
function show_results_characters_data(characters_list){
	let characterbox = document.getElementById("character-box");
	while(characterbox.firstChild){
		characterbox.removeChild(characterbox.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Characters";
	characterbox.appendChild(title_h2);
	characters_list.forEach(async function(url_character){
		let character_item = await fetch_something_with_url(url_character);
		render_only_character(character_item, characterbox);
	});
}
/*personae individual*/
function render_only_character(character, node_html){
	let text_name = document.createElement("h3");
	let text_height = document.createElement("p");
	let text_mass = document.createElement("p");
	let text_hair_color = document.createElement("p");
	let text_skin_color = document.createElement("p");
	let text_eye_color = document.createElement("p");
	let text_birth_year = document.createElement("p");
	let text_gender = document.createElement("p");

	text_name.textContent = character.name;
	node_html.appendChild(text_name);
	text_height.textContent = character.height;
	node_html.appendChild(text_height);
	text_mass.textContent = character.mass;
	node_html.appendChild(text_mass);
	text_hair_color.textContent = character.hair_color;
	node_html.appendChild(text_hair_color);
	text_skin_color.textContent = character.skin_color;
	node_html.appendChild(text_skin_color);
	text_eye_color.textContent = character.eye_color;
	node_html.appendChild(text_eye_color);
	text_birth_year.textContent = character.birth_year;
	node_html.appendChild(text_birth_year);
	text_gender.textContent = character.gender;
	node_html.appendChild(text_gender);
}


/*Planetas*/
function show_results_planets_data(planets_list){
	let planetbox = document.getElementById("planet-box");
	while(planetbox.firstChild){
		planetbox.removeChild(planetbox.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Planets";
	planetbox.appendChild(title_h2);
	planets_list.forEach(async function(url_planet){
		let planet_item = await fetch_something_with_url(url_planet);
		render_only_planet(planet_item, planetbox);
	});
}
/*planeta individual*/
function render_only_planet(planet, node_html){
	let text_name = document.createElement("h3");
	let text_rotation_period = document.createElement("p");
	let text_orbital_period = document.createElement("p");
	let text_diameter = document.createElement("p");
	let text_climate = document.createElement("p");
	let text_gravity = document.createElement("p");
	let text_terrain = document.createElement("p");
	let text_surface_water = document.createElement("p");

	text_name.textContent = planet.name;
	node_html.appendChild(text_name);
	text_rotation_period.textContent = planet.rotation_period;
	node_html.appendChild(text_rotation_period);
	text_orbital_period.textContent = planet.orbital_period;
	node_html.appendChild(text_orbital_period);
	text_diameter.textContent = planet.diameter;
	node_html.appendChild(text_diameter);
	text_climate.textContent = planet.climate;
	node_html.appendChild(text_climate);
	text_gravity.textContent = planet.gravity;
	node_html.appendChild(text_gravity);
	text_terrain.textContent = planet.terrain;
	node_html.appendChild(text_terrain);
	text_surface_water.textContent = planet.surface_water;
	node_html.appendChild(text_surface_water);
}