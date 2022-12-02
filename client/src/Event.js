import React from 'react';

const Block = (props) => {

    return (
        <div>
            <div style={{backgroundColor: 'black'}}>{props.name}</div>
        </div>
    );
}

export default Block;