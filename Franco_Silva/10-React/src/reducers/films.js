import { GET_FILMS, SUCCEDED_GET_FILMS, ERROR_GET_FILMS } from '../utils/constants';

const DEFAUL_STATE = { 
    error: false,
    films: [],
    options: [] 
}

const films = ( state = DEFAUL_STATE, action ) => {
    switch (action.type) {
        case GET_FILMS:
            return Object.assign({}, state, {
                error: false,
                films: []
            });
        case SUCCEDED_GET_FILMS:
            return Object.assign({}, state, {
                error: false,
                options: action.payload && action.payload.map((film, index) =>({
                    id: index,
                    value: index,
                    text: film.title
                })),
                films: action.payload
            });
        case ERROR_GET_FILMS:
            return Object.assign({}, state, {
                error: true
            });
        default:
            return state;
    }
}

export default films;