import React from 'react';
import {Link} from 'react-router-dom'

const Movie = ({id, title, img}) => (
    <div className="movieDiv">
        <img src={img} width="220px" height="300px"/>
        <Link to={{
            pathname: '/moviedesc/',
            state: {
                id: id
            }
        }}>{title}</Link>
    </div>
)
export default Movie