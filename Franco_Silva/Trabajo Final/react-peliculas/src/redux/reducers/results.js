/* eslint-disable default-case */
import {GET_MOVIES, SEARCH_MOVIE, SUCCEDED_GET_MOVIES, ERROR_GET_MOVIES,FILTER_SEARCH,NEXT_PAGE,BACK_PAGE, PAGE, CARGAR , ERROR} from './constants.js';

const STATE_INITIAL = { 
    resultList:[], resultQty:0 , loading:false , mediaSelected: {}, errorSelected:'', searFilters: {search:''}, activePages:1, totalPages:1,errorId:0 
}

export default (state =STATE_INITIAL, action) =>{
    switch (action.type) {
        case GET_MOVIES: 
            return{...state, resultList:action.payload.resultList, resultQty:action.payload.resultQty,loading:false, totalPages: Math.around(action.payload.resultQty/10) }
        case CARGAR:
            return {...state,loading:true}
        case ERROR_GET_MOVIES:
            return {...state, resultList:[], resultQty:0, error:action.payload,loading:false, errorId:state.errorId+1}
        case SUCCEDED_GET_MOVIES:
            return {...state, mediaSelected:action.payload}
        case ERROR:
            return {...state,errorSelected:action.payload}
        case FILTER_SEARCH:
            return{...state, searFilters:action.payload}
        case SEARCH_MOVIE:
            return{...state,searFilters:action.payload}
        case PAGE:
            return {...state,activePages:1}
        case NEXT_PAGE:
            return {...state,activePages: action.payload}
        case BACK_PAGE:
            return{...state,activePages: action.payload}
        deafult:
            return state
    }
}