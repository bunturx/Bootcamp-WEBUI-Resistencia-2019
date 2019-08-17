import React from 'react';
import PropTypes from 'prop-types'

const TextArea = ({id, label, name, className, onChange}) =>(
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        <textarea name={name} onChange={onChange}> {value }</textarea>
    </div>
);
TextArea.propTypes = {
    name: PropTypes.string.isRequired
}
export default TextArea;