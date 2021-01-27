import React, {Component} from 'react';
import axios from 'axios';
import TextField from '../../components/TextField'
import SearchTypeSection from '../../components/SearchTypeSection'
import Button from '../../components/Button'
import MoviesContainer from '../../containers/MoviesContainer'
import {getMovies} from '../../services/starwars'
import './Home.css'
class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            typeOfSearch: '',
            filmToSearch: '',
            listOfMovies: [],
            loading: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.getMovie = this.getMovie.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange(type){
        this.setState({
            typeOfSearch: type
        })
    }
    getMovie(string){
        this.setState({
            filmToSearch: string
        })
    }
    async handleSearch(){
        //just checking if the movie title has more than 3 characters (4 min).
        if (this.state.filmToSearch.length < 4){
            alert("Should enter a movie with more than 4 characters")
        }else {
                this.setState({
                    loading: true,
                })
                //get the list of movies from api
               const movies = await getMovies(this.state.filmToSearch, this.state.typeOfSearch)
               this.setState({
                   loading:false,
                   listOfMovies: movies 
               })

        }
    }
        
    render(){
        const {listOfMovies, loading } = this.state
        return (
            <section className="container">
                <TextField getMovie={this.getMovie}/>
                <SearchTypeSection handleChange={this.handleChange}/>
                <Button handleSearch={this.handleSearch} />
                {loading ? <div>Loading...</div> :  
                <MoviesContainer listOfMovies={listOfMovies}/>}
            </section>
        )
    }
}
export default Home;
