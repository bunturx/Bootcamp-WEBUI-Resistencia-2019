import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Template from './pages/Template'

ReactDOM.render(
    <Template />,
    document.getElementById("main")
);

//Film
//  |___MovieSelect
//  |       |__Select
//  |           |__Option
//  |
//  |__MovieDescription
//  |       |__Atribute*5 