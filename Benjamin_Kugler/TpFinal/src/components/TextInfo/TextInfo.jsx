import React from 'react';

const TextInfo = ({info}) =>(
    <div>
        { Object.keys(info).map((key, i) => <div key={i}>{key} : {info[key]}</div>)}
        <hr/>
    </div>
);
export default TextInfo;