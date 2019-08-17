import axios from 'axios';
import {STARWARS_HOST, STARWARS_FILMS} from '../../src/utils/constants';

export const getFilms = async () =>  {
    let result = await axios.get(`${STARWARS_HOST}${STARWARS_FILMS}`);
    return result.data.results;
};

export const getFilmsPromise = () =>  {
    return axios.get(`${STARWARS_HOST}${STARWARS_FILMS}`);
};

export const getPlanets = async (endpoint) =>  {
    let result = await axios.get(`${endpoint}`);
    return result.data.results;
};

export const getCharacters = async (endpoint) =>  {
    let result = await axios.get(`${endpoint}`);
    return result.data;
};

export const getSpecies = async (endpoint) =>  {
    let result = await axios.get(`${endpoint}`);
    return result.data.results;
};

export const getStarships = async (endpoint) =>  {
    let result = await axios.get(`${endpoint}`);
    return result.data.results;
};

