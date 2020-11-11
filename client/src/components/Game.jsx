import React from 'react';
import { GameCon } from './Styles.jsx';
import Board from './Board.jsx';


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player1: true,
      player2: false,
      check: true
    }
    this.handleTurn = this.handleTurn.bind(this);
  }

  handleTurn(firstPlayer, firstBoolean, secondPlayer, secondBoolean) {
    this.setState({
      [firstPlayer]: firstBoolean,
      [secondPlayer]: secondBoolean,
    })
  }

  render() {
    const { player1, player2 } = this.state;
    const { userName1, userName2, endgame, handleScore } = this.props;
    return (
      <GameCon>
        <p>It's {player1 ? userName1 : userName2}'s turn</p>
        <Board
          turn={this.handleTurn}
          player1={player1}
          player2={player2}
          handleScore={handleScore}
          endgame={endgame}
        />
      </GameCon>
    )
  }
}

export default Game;