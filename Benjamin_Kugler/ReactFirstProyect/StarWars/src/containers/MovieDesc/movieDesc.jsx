import React from 'react';
import Paragraph from '../../components/Paragraph'

export default class MovieDesc extends React.Component{


    render(){
        const {character1, starship1, vehicle1, planet1, specie1} = this.props
        return(
            <section className="movie-desc-section">
                <div className="atribute">
                    <div className="atribute-title">Character 1:</div>
                    <Paragraph text={character1.name}/>
                </div>
                <div className="atribute">
                    <div className="atribute-title">Planet 1:</div>
                    <Paragraph text={planet1.name}/>
                </div>
                <div className="atribute">
                    <div className="atribute-title">Starship 1:</div>
                    <Paragraph text={starship1.name}/>
                </div>
                <div className="atribute">
                    <div className="atribute-title">Vehicle 1:</div>
                    <Paragraph text={vehicle1.name}/>
                </div>
                <div className="atribute">
                    <div className="atribute-title">Specie 1:</div>
                    <Paragraph text={specie1.name}/>
                </div>
            </section>
        )
    }
}