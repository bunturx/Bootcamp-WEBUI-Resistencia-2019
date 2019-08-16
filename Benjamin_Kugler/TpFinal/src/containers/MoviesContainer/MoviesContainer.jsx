import React from 'react';
import Movie from '../../components/Movie'

export default class MoviesContainer extends React.Component{
    constructor(props){
        super(props)
        this.renderMovies = this.renderMovies.bind(this)
    }
    renderMovies(object){
        if(typeof  object === 'undefined'){
            return <div>No movies found</div>
        }
        else{
            return(
                Object.keys(object).map((info, key)=>{
                    return(
                        <Movie key={key} id={object[key].imdbID} title={object[key].Title} img={object[key].Poster}/>
                    )
                })
            )
        } 
        
    }
    render(){
        const {listOfMovies} = this.props
        return(
                <div>
                    {this.renderMovies(listOfMovies)}
                </div>
        )
    }
}