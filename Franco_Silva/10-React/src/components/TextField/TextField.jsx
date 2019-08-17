import React from 'react';
import PropTypes from 'prop-types'

const TextField = ({id, label, name, className, onChange}) =>(
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} onChange={onChange} type="text"/>
    </div>
);
TextField.propTypes = {
    name: PropTypes.string.isRequired
}
export default TextField;