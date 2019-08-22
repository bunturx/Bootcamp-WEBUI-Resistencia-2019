import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


/*import results from './reducers/reults';
import suggestions from './reducers/suggestions';
import currenItem from './reducers/currentitem';


/*const reducer = combineReducers({
    results,
    suggestions,
    currenItem,
}); */

const  store = createStore (reducers, applyMiddleware(thunk));

export default store;