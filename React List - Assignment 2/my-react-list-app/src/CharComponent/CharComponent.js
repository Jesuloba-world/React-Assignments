import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="charComponent">
            <p>{props.char}</p>
            <button onClick={props.del} >X</button>
        </div>
    )
}

export default charComponent;