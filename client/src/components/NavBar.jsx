import React from 'react';
import { NavBarCon, Title, Statistics } from './Styles.jsx';

const NavBar = ({ player1, player2, ties, userName1, userName2 }) => {
  return (
    <NavBarCon>
      <Title>
       Tic Tac Toe
      </Title>
      <Statistics>
        <h2>{userName1} : {player1}</h2>
        <h2>{userName2} : {player2}</h2>
        <h2>Ties: {ties}</h2>
      </Statistics>
    </NavBarCon>
  )
}


export default NavBar;