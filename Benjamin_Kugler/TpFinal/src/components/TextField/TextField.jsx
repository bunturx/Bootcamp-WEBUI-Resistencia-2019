import React from 'react';
import PropTypes from 'prop-types'

const TextField = ({getMovie}) =>(
        <input 
                type="text" 
                className="input-movie" 
                placeholder="Search your movie" 
                onChange={(e) => {
                        getMovie(e.target.value)
                }}
        />
);

export default TextField;