import React, { useState } from 'react';
import { Holder, Container } from './Styles.jsx';

const Winner = ({ winner, endgame }) => {
  const [tied, setTied] = useState('There is a tie!');
  const [playerWon, setPlayerWon] = useState(`The winner is ${winner} !`);

  const handleClick = (e) => {
    endgame(false);
  }

  return (
    <Holder>
    <Container>
      <p>{winner === 'tied' ? tied : playerWon}</p>
      <button className="btn-primary" onClick={handleClick}>Play Again</button>
    </Container>
  </Holder>
  )
}

export default Winner;