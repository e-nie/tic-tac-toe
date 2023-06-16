import React from 'react';
import Cell from './Cell';

const style = {
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)',
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
};

const Board = ({ board, fillCell }) => {
    return (
        <div style = { style }>
            { board.map((item, index) => <Cell key = { index }
                                               item = { item }
                                               fillCell = { fillCell }
                                               index = { index }
            />) }

        </div>
    );
};

export default Board;
