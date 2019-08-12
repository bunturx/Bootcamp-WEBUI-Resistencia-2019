import React from 'react';
import Proptypes from 'prop-types';

const TextField = ({name, onClick}) =>(
    <div>
        <label htmlFor={id}>{label}:</label>
        <input id={id} name={name} onClick={onClick} type="text"/>
    </div>
    );

TextField.Proptypes ={
    name: Proptypes.string.isRequired
}

export default TextField;