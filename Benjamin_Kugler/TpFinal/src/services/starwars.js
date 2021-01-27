import Axios from "axios";

export const getMovies = async (title,type) => {
    try{
        const result = await Axios.get(`http://www.omdbapi.com/?s=${title}&page=2&type=${type}&apikey=7d48e9f9`)
        const data = result.data
        const search = data.Search
        return search
    }
    catch(e){
        return e
    }
}




