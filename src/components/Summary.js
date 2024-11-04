import React from 'react';

function Summary(props) {
    return (
        <div>
            <h3>{props.subtitle}</h3>
            <p>{props.summary}</p>
        </div>
    )
}

export default Summary;