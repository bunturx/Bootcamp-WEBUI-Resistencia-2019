var selectmovie = document.getElementById("selectmovie");
var movie_list = []
var movie = []

var loading = document.getElementById("loading");
var databox = document.getElementById("data-box");
var errorbox = document.getElementById("error");

var character_index = 0;
var planet_index = 0;
var starship_index = 0;
var vehicle_index = 0;
var specie_index = 0;

var swapi = `https://swapi.co/api/`;
var error_msg_intro = "Error, Try Later. "
var error_msg = "Error, Try Later."



async function fetch_some_json(request){
	let data_return;
	data_return = await fetch(request)
		.then(function(response){
			return response.json();
		})
		.then(function(myjson){
			return myjson;
		})
		.catch(function(error){
			error_msg = error;
			return error_msg;
		})
	return data_return;
}

async function fetch_movie_list(){
	let request = swapi + `films/`;
	let data = await fetch_some_json(request);
	return data.results;
}


function display_error(error){

	errorbox = document.getElementById("error");
	errorbox.textContent=error_msg_intro + error;
}

async function load_movie_list(){
	movie_list = await fetch_movie_list();
	if(movie_list==null){
		display_error(error_msg);
	}
	else{
		movie_list.forEach(function(movie, i){
			option = document.createElement("option");
			option.setAttribute('value', movie.url);
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
	movie = await fetch_some_json(value);
	/*cargar/mostrar datos resultado*/
	show_results(movie);

	loading.classList.add("hidden");
	databox.classList.remove("hidden");	
}


/*Data box info*/
function show_results(movie){
	show_results_movie_data(movie);
	character_index = 0;
	render_character_box(movie.characters, character_index);
	planet_index = 0;
	render_planet_box(movie.planets, planet_index);
	starship_index = 0;
	render_starship_box(movie.starships, starship_index);
	vehicle_index = 0;
	render_vehicle_box(movie.vehicles, vehicle_index);
	specie_index = 0;
	render_specie_box(movie.species, specie_index);

}

/*Movie Info*/
function show_results_movie_data(movie){
	let movieboxdata = document.getElementById("movie-box-data");
	while(movieboxdata.firstChild) {
		movieboxdata.removeChild(movieboxdata.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Movie: "+ movie.title;
	movieboxdata.appendChild(title_h2);
}


/*Character Info-box*/
async function render_character_box(character_list,index){
	let characterboxdata = document.getElementById("character-box-data");
	while(characterboxdata.firstChild){
		characterboxdata.removeChild(characterboxdata.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Characters" + (index+1) + "/" + character_list.length;
	characterboxdata.appendChild(title_h2);
	url_character = character_list[index];
	let character_item = await fetch_some_json(url_character);
	render_character_data(character_item,characterboxdata);
}
/*Character data in the data-box*/
function render_character_data(character, node_html){
	let text_name = document.createElement("h3");
	let text_height = document.createElement("p");
	let text_mass = document.createElement("p");
	let text_hair_color = document.createElement("p");
	let text_skin_color = document.createElement("p");
	let text_eye_color = document.createElement("p");
	let text_birth_year = document.createElement("p");
	let text_gender = document.createElement("p");

	text_name.textContent = "Name: " + character.name;
	node_html.appendChild(text_name);
	text_height.textContent = "Height: " + character.height;
	node_html.appendChild(text_height);
	text_mass.textContent = "Mass: " + character.mass;
	node_html.appendChild(text_mass);
	text_hair_color.textContent = "Hair Color: " + character.hair_color;
	node_html.appendChild(text_hair_color);
	text_skin_color.textContent = "Skin Color: " + character.skin_color;
	node_html.appendChild(text_skin_color);
	text_eye_color.textContent = "Eye color: " + character.eye_color;
	node_html.appendChild(text_eye_color);
	text_birth_year.textContent = "Birth Year: " + character.birth_year;
	node_html.appendChild(text_birth_year);
	text_gender.textContent = "Gender: " + character.gender;
	node_html.appendChild(text_gender);
}

/*next character render*/
function render_more_info_character(){
	if(character_index<movie.characters.length-1){
		character_index++;
	}
	else{
		character_index = 0;
	}
	render_character_box(movie.characters, character_index);
}




/*planet info-box*/
async function render_planet_box(planet_list,index){
	let planetboxdata = document.getElementById("planet-box-data");
	while(planetboxdata.firstChild){
		planetboxdata.removeChild(planetboxdata.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Planets" + (index+1) + "/" + planet_list.length;
	planetboxdata.appendChild(title_h2);
	url_planet = planet_list[index];
	let planet_item = await fetch_some_json(url_planet);
	render_planet_data(planet_item,planetboxdata);
}
/*planet data in data-box*/
function render_planet_data(planet, node_html){
	let text_name = document.createElement("h3");
	let text_rotation_period = document.createElement("p");
	let text_orbital_period = document.createElement("p");
	let text_diameter = document.createElement("p");
	let text_climate = document.createElement("p");
	let text_gravity = document.createElement("p");
	let text_terrain = document.createElement("p");
	let text_surface_water = document.createElement("p");

	text_name.textContent = "Name: " + planet.name;
	node_html.appendChild(text_name);
	text_rotation_period.textContent = "Rotation Period: " + planet.rotation_period;
	node_html.appendChild(text_rotation_period);
	text_orbital_period.textContent = "Orbital Period:" + planet.orbital_period;
	node_html.appendChild(text_orbital_period);
	text_diameter.textContent = "Diameter: " + planet.diameter;
	node_html.appendChild(text_diameter);
	text_climate.textContent = "Climate: " + planet.climate;
	node_html.appendChild(text_climate);
	text_gravity.textContent = "Gravity: " + planet.gravity;
	node_html.appendChild(text_gravity);
	text_terrain.textContent = "Terrain: " + planet.terrain;
	node_html.appendChild(text_terrain);
	text_surface_water.textContent = "Surface Water: " + planet.surface_water;
	node_html.appendChild(text_surface_water);
}

/*render next planet*/
function render_more_info_planet(){
	if(planet_index<movie.planets.length-1){
		planet_index++;
	}
	else{
		planet_index = 0;
	}
	render_planet_box(movie.planets, planet_index);
}
/*-----------*/

/*starship*/
async function render_starship_box(starship_list,index){
	let starshipboxdata = document.getElementById("starship-box-data");
	while(starshipboxdata.firstChild){
		starshipboxdata.removeChild(starshipboxdata.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Starships" + (index+1) + "/" + starship_list.length;
	starshipboxdata.appendChild(title_h2);
	url_starship = starship_list[index];
	let starship_item = await fetch_some_json(url_starship);
	render_starship_data(starship_item,starshipboxdata);	
}

function render_starship_data(starship, node_html){
	let text_name = document.createElement("h3");
	let text_model = document.createElement("p");
	let text_manufacturer = document.createElement("p");
	let text_cost_in_credits = document.createElement("p");
	let text_length = document.createElement("p");
	let text_max_atmosphering_speed = document.createElement("p");
	let text_crew = document.createElement("p");
	let text_passengers = document.createElement("p");
	let text_cargo_capacity = document.createElement("p");
	let text_consumables = document.createElement("p");
	let text_hyperdrive_rating = document.createElement("p");
	let text_MGLT = document.createElement("p");
	let text_starship_class = document.createElement("p");

	text_name.textContent = "Name: " + starship.name;
	node_html.appendChild(text_name);
	text_model.textContent = "Model: " + starship.model;
	node_html.appendChild(text_model);
	text_manufacturer.textContent = "Manufacturer: " + starship.manufacturer;
	node_html.appendChild(text_manufacturer);
	text_cost_in_credits.textContent = "Cost_in_credits: " + starship.cost_in_credits;
	node_html.appendChild(text_cost_in_credits);
	text_length.textContent = "Lenght: " + starship.length;
	node_html.appendChild(text_length);
	text_max_atmosphering_speed.textContent = "Max_atmosphering_speed: " + starship.max_atmosphering_speed;
	node_html.appendChild(text_max_atmosphering_speed);
	text_crew.textContent = "Crew: " + starship.crew;
	node_html.appendChild(text_crew);
	text_passengers.textContent = "Passengers: " + starship.passengers;
	node_html.appendChild(text_passengers);
	text_cargo_capacity.textContent = "Cargo Capacity: " + starship.cargo_capacity;
	node_html.appendChild(text_cargo_capacity);
	text_consumables.textContent = "Consumables: " + starship.consumables;
	node_html.appendChild(text_consumables);
	text_hyperdrive_rating.textContent = "Hyperdrive Rating: " + starship.hyperdrive_rating;
	node_html.appendChild(text_hyperdrive_rating);
	text_MGLT.textContent = "MGTL: " + starship.MGLT;
	node_html.appendChild(text_MGLT);
	text_starship_class.textContent = "Class: " + starship.starship_class;
	node_html.appendChild(text_starship_class);

}

function render_more_info_starship(){
	if(starship_index<movie.starships.length-1){
		starship_index++;
	}
	else{
		starship_index = 0;
	}
	render_starship_box(movie.starships, starship_index);
}





/*vehivle*/
async function render_vehicle_box(vehicle_list,index){
	let vehicleboxdata = document.getElementById("vehicle-box-data");
	while(vehicleboxdata.firstChild){
		vehicleboxdata.removeChild(vehicleboxdata.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Vehicles" + (index+1) + "/" + vehicle_list.length;
	vehicleboxdata.appendChild(title_h2);
	url_vehicle = vehicle_list[index];
	let vehicle_item = await fetch_some_json(url_vehicle);
	render_vehicle_data(vehicle_item,vehicleboxdata);

}



function render_vehicle_data(vehicle, node_html){
	let text_name = document.createElement("h3");
	let text_model = document.createElement("p");
	let text_manufacturer = document.createElement("p");
	let text_cost_in_credits = document.createElement("p");
	let text_length = document.createElement("p");
	let text_max_atmosphering_speed = document.createElement("p");
	let text_crew = document.createElement("p");
	let text_passengers = document.createElement("p");
	let text_cargo_capacity = document.createElement("p");
	let text_consumables = document.createElement("p");
	let text_vehicle_class = document.createElement("p");

	text_name.textContent = "Name: " + vehicle.name;
	node_html.appendChild(text_name);
	text_model.textContent = "Model: " + vehicle.model;
	node_html.appendChild(text_model);
	text_manufacturer.textContent = "Manufacturer: " + vehicle.manufacturer;
	node_html.appendChild(text_manufacturer);
	text_cost_in_credits.textContent = "Cost_in_credits: " + vehicle.cost_in_credits;
	node_html.appendChild(text_cost_in_credits);
	text_length.textContent = "Lenght: " + vehicle.length;
	node_html.appendChild(text_length);
	text_max_atmosphering_speed.textContent = "Max_atmosphering_speed: " + vehicle.max_atmosphering_speed;
	node_html.appendChild(text_max_atmosphering_speed);
	text_crew.textContent = "Crew: " + vehicle.crew;
	node_html.appendChild(text_crew);
	text_passengers.textContent = "Passengers: " + vehicle.passengers;
	node_html.appendChild(text_passengers);
	text_cargo_capacity.textContent = "Cargo Capacity: " + vehicle.cargo_capacity;
	node_html.appendChild(text_cargo_capacity);
	text_consumables.textContent = "Consumables: " + vehicle.consumables;
	node_html.appendChild(text_consumables);
	text_vehicle_class.textContent = "Class: " + vehicle.vehicle_class;
	node_html.appendChild(text_vehicle_class);
}

function render_more_info_vehicle(){
	if(vehicle_index<movie.vehicles.length-1){
		vehicle_index++;
	}
	else{
		vehicle_index = 0;
	}
	render_vehicle_box(movie.vehicles, vehicle_index);
}










/*specie*/
async function render_specie_box(specie_list,index){
	let specieboxdata = document.getElementById("specie-box-data");
	while(specieboxdata.firstChild){
		specieboxdata.removeChild(specieboxdata.firstChild);
	}
	title_h2 = document.createElement("h2");
	title_h2.textContent = "Species" + (index+1) + "/" + specie_list.length;
	specieboxdata.appendChild(title_h2);
	url_specie = specie_list[index];
	let specie_item = await fetch_some_json(url_specie);
	render_specie_data(specie_item,specieboxdata);	
}

function render_specie_data(specie, node_html){
	let text_name = document.createElement("h3");
	let text_classification = document.createElement("p");
	let text_designation = document.createElement("p");
	let text_average_height = document.createElement("p");
	let text_skin_colors = document.createElement("p");
	let text_eye_colors = document.createElement("p");
	let text_average_lifespan = document.createElement("p");
	let text_language = document.createElement("p");

	text_name.textContent = "Name: " + specie.name;
	node_html.appendChild(text_name);
	text_classification.textContent = "Classification: " + specie.classification;
	node_html.appendChild(text_classification);
	text_designation.textContent = "Designation: " + specie.designation;
	node_html.appendChild(text_designation);
	text_average_height.textContent = "Average Height: " + specie.average_height;
	node_html.appendChild(text_average_height);
	text_skin_colors.textContent = "Skin Colors: " + specie.skin_colors;
	node_html.appendChild(text_skin_colors);
	text_hair_colors = document.createElement("p");
	node_html.appendChild(text_hair_colors);
	text_eye_colors.textContent = "Eye colors: " + specie.eye_colors;
	node_html.appendChild(text_eye_colors);
	text_average_lifespan.textContent = "Average Lifespan: " + specie.average_lifespan;
	node_html.appendChild(text_average_lifespan);
	text_language.textContent = "Language: " + specie.language;
	node_html.appendChild(text_language);
}

function render_more_info_specie(){
	if(specie_index<movie.species.length-1){
		specie_index++;
	}
	else{
		specie_index = 0;
	}
	render_specie_box(movie.species, specie_index);
}








window.onload = function(){

	load_movie_list();
}