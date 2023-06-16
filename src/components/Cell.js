import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
};
const Cell = ({item, fillCell, index}) => {
    return (
        <button onClick={() => fillCell(index)} style = { style }>
            {item}
        </button>
    );
};

export default Cell;
