import React, { useState } from 'react';
import { GameCon } from './Styles.jsx';
import Board from './Board.jsx';

const Game = ({ userName1, userName2, endgame, handleScore }) => {
  const [ player1, setPlayer1 ] = useState(true);
  const [ player2, setPlayer2 ] = useState(false);

  const handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
    if (firstPlayer === 'player1') {
      setPlayer1(firstBoolean)
      setPlayer2(secondBoolean)
    } else {
      setPlayer2(firstBoolean)
      setPlayer1(secondBoolean)
    }
  }
  return (
    <GameCon>
    <p>It's {player1 ? userName1 : userName2}'s turn</p>
    <Board
      turn={handleTurn}
      player1={player1}
      player2={player2}
      handleScore={handleScore}
      endgame={endgame}
    />
  </GameCon>
  )
}



export default Game;