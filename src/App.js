import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board';

function App() {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [winner, setWinner] = useState('');


    const fillCell = (index) => {
        const nextPlayer = isPlayerX ? 'X' : 'O';
        setBoard(board.map((item, ind) => index === ind ? nextPlayer : item));
        setIsPlayerX(!isPlayerX);
    };

    const getWinner = () => {
        const winCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let i = 0; i < winCombinations.length; i++) {
            const [a,b,c] = winCombinations[i]
            if(board[a] === board[b] && board[b] === board[c] && board[a] !== null) {
               setWinner(board[a])
            }
        }
    };

    useEffect(() => {
getWinner()
    }, [board])

    return (
        <div className = 'App'>
            <h1>Tic Tac Toe</h1>
            <Board
                board = { board }
                fillCell = { fillCell }
            />
<h2>Next Player: {isPlayerX ? 'X' : 'O'}</h2>
            <h2>Winner is {winner} ! Congrats!</h2>
        </div>
    );
}

export default App;
