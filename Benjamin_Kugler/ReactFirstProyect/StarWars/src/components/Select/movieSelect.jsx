import React from 'react';
import Loading from '../Loading';
import Option from '../Option';


export default class MovieSelect extends React.Component{
    


    render(){
        const { handleChange, array, loaded } = this.props
        return (!loaded) ? 
                    <Loading/> : 
                    <select onChange={(e)=> {
                        handleChange(e.target.selectedOptions[0].textContent)
                    }}>
                        {array.map(film =>(
                            <Option 
                                key={film.url} 
                                title={film.title} 
                            />
                        ))}
                    </select>
        
        
    }
} 
