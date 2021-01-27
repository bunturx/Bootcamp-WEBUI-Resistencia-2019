import React from 'react'
import axios from 'axios'
import Poster from '../../components/Poster'
import './MovieDescription.css'

export default class MovieDescription extends React.Component{
    constructor (props){
        super(props)
        this.state={
            plot: '',
            rated: '',
            released: '',
            runtime: '',
            genre: '',
            director: '',
            writer: '',
            actors: '',
            language: '',
            country: '',
            production: '',
            website: '',
            poster: ''
        }
    }
    componentDidMount(){
        axios.get(`http://www.omdbapi.com/?i=${this.props.location.state.id}&apikey=7d48e9f9`)
        .then(result => result.data)
        .then(data =>
            this.setState({
                title: data.Title,
                plot: data.Plot,
                rated: data.Rated,
                released: data.Released,
                runtime: data.Runtime,
                genre: data.Genre,
                director: data.Director,
                writer: data.Writer,
                actors: data.Actors,
                language: data.Language,
                country: data.Country,
                production: data.Production,
                website: data.Website,
                poster: data.Poster
            }) 
        )
        console.log(this.state)
        
    }
    render(){
        const {poster, title, plot, rated, released, runtime, genre, director, writer, actors, language, country, production, website} =  this.state
        return(
        <section className="movie-desc-section">
            <div className="movie-poster">
                <Poster src={poster}/>
            </div>
            <aside className="aside-content">
                <h3>{title}</h3>
                <div className="divider">Plot</div>
                <p>{plot}</p>
                <div className="divider">Movie Info</div>
                <p>Rated: {rated}</p>
                <p>Released: {released}</p>
                <p>Runtime: {runtime}</p>
                <p>Genre: {genre}</p>
                <p>Director: {director}</p>
                <p>Writer: {writer}</p>
                <p>Actors: {actors}</p>
                <p>Language: {language}</p>
                <p>Country: {country}</p>
                <p>Production: {production}</p>
                <p>Website: {website}</p>
                <div className="divider">Ratings</div>
            </aside>
        </section>
        )
    }
}