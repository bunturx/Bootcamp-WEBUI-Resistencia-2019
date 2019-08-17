import React, {Component} from 'react';
import { getCharacters } from '../../services/starwars';
import TextInfo from '../../components/TextInfo';
class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: []
        }
    }

    async componentDidMount() {
        const characters = await this.getCharacters();
        this.setState({characters});
    }

    async getCharacters(){
        const { characters } = this.props;
        const characterList = await Promise.all(characters.map(character => getCharacters(character)));
        this.setState({characterList});
    }

    async getPlanets() {

    }

    async getVehicles() {

    }

    async getSpecies() {

    }

    async getStarships() {

    }

    renderCharacters(){
        const { characterList } = this.state;
        return characterList.map((info, key) => <TextInfo key={key} info={info} />);
    }

    render() {
        const { filmSelected } = this.props;
        return(
            <section>
                I have select the movie: {filmSelected}
                <hr/>
                characters
                <br/>
                { this.renderCharacters() }
            </section>
        )
    }
}

export default Film;