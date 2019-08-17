import React from 'react';
import Option from './Option';

const Select = ({id, label, name, className, onChange, options}) =>(
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        <select name={name} id={id} onChange={onChange}>
            {options && options.map((option, index)=>(
                <Option 
                    value={option.value}
                    text={option.text}
                    key={index}
                />
            ))}
        </select>
    </div>
);

export default Select;