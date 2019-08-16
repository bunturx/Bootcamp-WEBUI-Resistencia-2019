import React from 'react';

export default class SearchTypeSection extends React.Component{
    constructor(props){
        super(props)
        this.changeState = this.changeState.bind(this)
    }
    changeState(e){
        this.setState({
            typeOfSearch: e.target.value}, 
            () => console.log(this.state))

    }
    render(){
        const { handleChange } = this.props
        return(
            <section>
                <label>
                    Movies
                    <input type="radio" 
                        name="searchType" 
                        value="movie"
                        onChange={(e)=> {
                            handleChange(e.target.value)
                        }}
                    />
                </label>
                <label>
                    Series
                    <input type="radio" 
                        name="searchType" 
                        value="series"
                        onChange={(e)=> {
                            handleChange(e.target.value)
                        }}
                    />
                </label>
                <label>
                    Episodes
                    <input type="radio" 
                        name="searchType" 
                        value="episode" 
                        onChange={(e)=> {
                            handleChange(e.target.value)
                        }}
                />
                </label>
                <label>
                    Year
                    <input type="radio" 
                        name="searchType" 
                        value="year" 
                        onChange={(e)=> {
                            handleChange(e.target.value)
                        }}
                />
                </label>
            </section>
            
        )
    }
}