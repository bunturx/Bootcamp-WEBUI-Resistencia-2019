var results = [];
	selected = "";
	title = document.getElementById("title");
	description = document.getElementById("description");
	releaseDate = document.getElementById("releaseDate");
	episode = document.getElementById("episode");
	directionProduction = document.getElementById("directionProduction");
	chararacters = document.getElementById("characters");

function jsonFetch(url,option)
{
	return new Promise((resolve,reject) =>
		{
			fetch(url)
				.then((response) => {
					resolve(response.json());
				})
					.catch((error) => {console.log(error)});
		})
}

jsonFetch("https://swapi.co/api/films/","s").then((data) => {
	data.results.forEach((film) => 
		{
			filmElement = document.createElement("li");
			filmElement.innerText = film.title;
			filmElement.showInfo = () => 
				{
					console.log(film)
					title.innerText = film.title;
					description.innerText = film.opening_crawl;
					releaseDate.innerText = film.release_date;
					episode.innerText = `Episode: ${film.episode_id}`;
					directionProduction.innerText = `Director: ${film.director}`
					chararacters.innerText = "";
					film.characters.forEach((characterURL) => 
						{
							jsonFetch(characterURL)
								.then((data) => 	
									{
										characterElement = document.createElement("li");
										characterElement.innerText = data.name;
										characterElement.setAttribute("class", "chararactersItem");
										chararacters.appendChild(characterElement)
									})
						});
				};
			filmElement.addEventListener("click", filmElement.showInfo)
			filmElement.setAttribute("class", "filmListItem");
			document.getElementById("filmList").appendChild(filmElement);
			results.push(filmElement);
		});
});