import React, {Component} from 'react';
import Form from '../../containers/Form';
import {getFilms} from '../../services/starwars'
import Loading from '../../components/Loading';
import Select from '../../components/Select';
import Film from '../../containers/Films';
class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            films: []
        }
        this.onMovieSelected = this.onMovieSelected.bind(this);
    }

    async componentDidMount() {
        const { appGetReady, appGetBusy, fetchFilms } = this.props;
        appGetBusy();
        await fetchFilms();
        appGetReady();
        //this.setState({loading: false, options, films});
    }

    async onMovieSelected(event) {
        const { films } = this.props;
        const { characters, planets, species, vehicles, title } = films[event.target.selectedIndex];
        this.setState({
            filmSelected: title,
            characters,
            planets,
            species,
            vehicles
        });
    }

    render() {
        const { options, filmSelected } = this.props;
        const { characters, planets, species, vehicles } = this.props;
        const { ready } = this.props;
        return (
            <section>
                { !ready ?
                    <Loading text="Loading" /> :
                    <Select options={options} onChange={this.onMovieSelected}/> 
                }
                { /*filmSelected && 
                        <Film 
                            characters={characters} 
                            planets={planets}
                            species={species}
                            vehicles={vehicles}
                            filmSelected={filmSelected}
                        />*/
                }
            </section>
        )
    }
};
export default Home;