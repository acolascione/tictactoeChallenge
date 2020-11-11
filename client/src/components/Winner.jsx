import React from 'react';
import { Holder, Container } from './Styles.jsx';


class Winner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tied: 'There is a tie!',
      playerWon: 'The winner is ' + this.props.winner + '!',
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.props.endgame(false);
  }
  render() {
    const { winner } = this.props;
    const { tied, playerWon } = this.state;
    return (
      <Holder>
        <Container>
          <p>{winner === 'tied' ? tied : playerWon}</p>
          <button className="btn-primary" onClick={this.handleClick}>Play Again</button>
        </Container>
      </Holder>
    )
  }
}

export default Winner;