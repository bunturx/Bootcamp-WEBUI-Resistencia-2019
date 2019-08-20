import {createStore, combineReducers } from 'redux';
import results from './reducers/reults';
import suggestions from './reducers/suggestions';
import currenItem from './reducers/currentitem';

const reducer = combineReducers({
    results,
    suggestions,
    currenItem,
});

const  store = createStore (reducer);

export default store;