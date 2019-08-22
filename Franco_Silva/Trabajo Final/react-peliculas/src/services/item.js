const elementOMDB = async () => {
    return await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4cca8b5d')
    .then( res => res.json() )
    .then( query => {
        console.log(query);  
        if (query.Response === 'True'){
            let searchResult = query.Search; 
            console.log(searchResult);
            return searchResult
        }}
        )
    .catch(err=> console.log(err))
}

export default elementOMDB;