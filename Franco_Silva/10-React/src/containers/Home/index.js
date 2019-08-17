import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../pages/Home';
import { appGetBusy, appGetReady } from '../../actions/app';
import { fetchFilms } from '../../actions/films'

const mapStateToProps = state => ({
    ready: state.app.ready,
    options: state.films.options
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        appGetBusy,
        appGetReady,
        fetchFilms
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);