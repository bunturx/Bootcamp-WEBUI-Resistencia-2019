import React from 'react';
import MovieSelect from '../../components/Select';
import MovieDesc from '../../containers/MovieDesc'
const URL = "https://swapi.co/api/films/"
import fetchApi from '../../services/starwars';

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            allFilms: [],
            film: 'A New Hope',
            character: [],
            planet: '',
            starship: '',
            vehicle: '',
            specie: ''

        }
        this.handleChange = this.handleChange.bind(this)
    }
    async componentDidMount(){
        try{
            const apiResponse = await fetchApi(URL);
            const result = apiResponse.results;
            this.setState({
                isLoaded: true,
                allFilms: result
            })
        }
        catch(e){
            return e
        }
    }
    


    async handleChange(titleSelected){
        this.state.allFilms.map(async film =>{
            if(film.title === titleSelected){
                try{
                    const char = await fetchApi(film.characters[0])
                    const planet1 = await fetchApi(film.planets[0])
                    const starship1 = await fetchApi(film.starships[0])
                    const vehicle1 = await fetchApi(film.vehicles[0])
                    const specie1 = await fetchApi(film.species[0])
                    this.setState({
                        film: film.title,
                        character: char,
                        planet: planet1,
                        starship: starship1,
                        vehicle: vehicle1,
                        specie: specie1
                    })
                    return this.state
                }
                catch(e){
                    throw e
                }
                
            }
        })
    }
    

    render(){
        return (<div>
            <MovieSelect 
                handleChange={this.handleChange} 
                array={this.state.allFilms} 
                loaded={this.state.isLoaded}
            />
            <MovieDesc 
                filmSelected={this.state.film}
                character1={this.state.character}
                planet1={this.state.planet}
                starship1={this.state.starship}
                vehicle1={this.state.vehicle}
                specie1={this.state.specie}
            />
        </div>
        )}
}