import React , { useEfect, useState, useEffect} from 'react';
import {conect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions/actions.js';
import infoMovie from './page.js';
import {Paper} from  '@material-ui/core';


const movies = props => {
    const { selectMedia, selectError, actions } = props;
    const path = window.location.pathname.substr(9);
        useEffect(()=>{
            if(!errorSelected){
                if (mediaSelected.idIMDB !== path){
                    actions.bringSelected(path)
                }    
            }
        }, [actions, errorSelected, mediaSelected.idIMDB, path,props] )
    return (mediaSelected.Title ? <infoMovie info={mediaSelected} />:<Paper>{errorSelected}</Paper>)
}

const mapStateProps = reducers => reducers.results

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(Actions, dispatch)})

export default connect(mapStateProps, mapDispatchToProps)(infoMovie)

