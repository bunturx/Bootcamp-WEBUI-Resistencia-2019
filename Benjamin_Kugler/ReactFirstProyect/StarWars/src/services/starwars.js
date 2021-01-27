export default async function fetchApi(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    }
    catch(e){
        throw e
    }
}


/*
 export default function fetchApi(){
    return (fetch("https://swapi.co/api/films/")
        
        .then(response => response.json())
        .then(data => {
            return data.results})

    )
} */

