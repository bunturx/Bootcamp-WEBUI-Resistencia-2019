import {GET_MOVIES, SUCCEDED_GET_MOVIES, ERROR_GET_MOVIES,FILTER_SEARCH,NEXT_PAGE,BACK_PAGE, PAGE, CARGAR , ERROR} from './constants.js';

//filtro

const filterString = filtro => {
    let {search, year,type,page} = filtro;
    let filterofSearch = search ? '&s=' + search : '';
    let filterofYear = year ? '&y=' + year: '';
    let filterofType=  type ? '&t=' + type: '';
    let filterofPage= page ? '&p=' + page: '';
    return '?' +filterofSearch+filterofYear+filterofType+filterofPage;
}

//retorna resultado del filtro

export const resultado = filterofSearch =>{
    filterofSearch.page= 1;
    getMovies(filterofSearch);
}

//Guarda el resultado del filtro

export const searchFilter = filterofSearch => {
    return {
        type: FILTER_SEARCH, payload:filterofSearch
    }
}

export const  pages = pagePri  => {
    return {
        type: PAGE, payload: pagePri
    }
}

export const backPage = (filterofSearch) =>{
    return {
        type: BACK_PAGE, payload: filterofSearch.page
    }
}

export const nextPage = (filterofSearch) =>{
    return {
        type: NEXT_PAGE, payload: filterofSearch.page
    }
}

export const getMovies = filterofSearch => async dispatch=> {
    if (filterofSearch){
        dispatch ({type:CARGAR});
            const urlFiltered = filterString (filterofSearch)
                await fetch ('http://www.omdbapi.com/'+urlFiltered+'&apikey=4cca8b5d').then (res => res.json())
                    .then(res =>{
                        if(res.Response === 'True'){
                            dispatch ({type:GET_MOVIES, payload: {listResult: res.search, resultQty:res.totalResults} })
                        }else{
                            dispatch({rype:ERROR_GET_MOVIES, payload: res.Error})
                        }
                    })
                .catch(err=> {
                    dispatch({type:ERROR_GET_MOVIES,payload:err})
                })
    }else{
        dispatch({type:ERROR_GET_MOVIES, payload: 'Introdusca el nombre de pelicula correcta'})
    }
}

export const  bringSelected = idIMDB => async dispatch=> {
    if (idIMDB){
        await fetch('http://www.omdbapi.com/'+idIMDB+'&apikey=4cca8b5d').then (res=> res.json())
            .then(response => {
                if(response.Response === 'False'){
                    dispatch ({type: ERROR, payload: response})
                }else{
                    dispatch ({type:SUCCEDED_GET_MOVIES, payload:response})
                }
            })
        .catch  (err=> {
            dispatch ({type:ERROR, payload: 'Ocurrio un error y no se pudo conectar'})
        })
    }else{
        dispatch({type:ERROR, payload:'EL id no se encontro.Vuelva intentarlo mas Tarde'})
    }
}

