import { GET_FILMS, SUCCEDED_GET_FILMS, ERROR_GET_FILMS } from '../utils/constants';
import { getFilmsPromise as getFilmsFromServer } from '../services/starwars'

const getFilms = () => ({
    type: GET_FILMS
})

const successGetFilm = payload => ({
    type: SUCCEDED_GET_FILMS,
    payload
})

const errorGetFilms = (data) => ({
    type: ERROR_GET_FILMS
})

export const fetchFilms = () => {
    return dispatch => {
        dispatch(getFilms());
        return getFilmsFromServer()
            .then(response => response.data.results)
            .then(results => dispatch(successGetFilm(results)))
            .catch(error => dispatch(errorGetFilms()))
    }
}