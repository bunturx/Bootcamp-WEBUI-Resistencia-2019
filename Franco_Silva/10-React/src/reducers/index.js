import {combineReducers} from 'redux';
import app from './app';
import films from './films';

const reducers = combineReducers({
    app,
    films
});

export default reducers;