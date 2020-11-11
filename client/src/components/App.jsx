import React from 'react';
import Game from './Game.jsx';
import Winner from './Winner.jsx';
import NavBar from './NavBar.jsx';
import Login from './login.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
`;


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ties: 0,
      userName1: "Player1",
      userName2: "Player2",
      winner: '',
      player1: 0,
      player2: 0,
      showLogin: true,
      showEndGame: false,
    }
    this.handleScore = this.handleScore.bind(this);
    this.handleEndGame = this.handleEndGame.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleScore(player) {
    const { userName1, userName2 } = this.state;
    let winner;
    if (player === "player1") {
      winner = userName1;
    } else if ( player === "player2") {
      winner = userName2;
    } else {
      winner = "Tied"
    }
    this.setState({
      [player]: this.state[player] + 1,
      winner
    })
    if (winner === "Tied") {
      this.setState({
        ties: this.state.ties + 1,
      })
    }
  }

  handleName(player1, player2) {
    this.setState({
      userName1: player1,
      userName2: player2,
      showLogin: false,
    })
  }

  handleEndGame(input) {
    this.setState({
      showEndGame: input,
    })
  }

  render() {
    const {
      ties, player1, player2, showLogin, userName1, userName2, showEndGame, winner
    } = this.state;
    return (
      <Wrapper>
        {showEndGame ? (
          <Winner winner={winner} endgame={this.handleEndGame} />
        ) : null}
        {showLogin ? <Login names={this.handleName} /> : null}
        <NavBar
          ties={ties}
          userName1={userName1}
          userName2={userName2}
          player1={player1}
          player2={player2}
        />
        <Game
          userName1={userName1}
          userName2={userName2}
          endgame={this.handleEndGame}
          handleScore={this.handleScore}
        />
      </Wrapper>
    )
  }
}
export default App;