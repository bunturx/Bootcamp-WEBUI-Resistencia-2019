//Parte logica
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
//componente contenedor
class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            results,
        } = this.props;

        return (
            <Page
                results={results}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});

export default withRouter(
    connect(mapStateToProps)(Results)
);
// const wrapper = connect (mapStateToProps);
//const component = wrapper (Results); 
//export default component;
//forma de conectar un componente a react redux
// esta es una forma de hacer pero se puede hacer de la siguiente forma

