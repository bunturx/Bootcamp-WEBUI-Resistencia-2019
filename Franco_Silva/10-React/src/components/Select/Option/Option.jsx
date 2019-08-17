import React from 'react';
import PropTypes from 'prop-types'

const Option = ({text, value}) =>(
    <option value={value}> {text}</option>
);

export default Option;