import React from 'react';
import styled from 'styled-components';
import { Holder, Container } from './Styles.jsx';

// const Wrapper = styled.div`
//   .holder {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     width: 100%;
//     background: rgba(0, 0, 0, 0.7);
//     position: fixed;
//   }
//   .container {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 400px;
//     background: white;
//     width: 300px;
//     box-shadow: 6px 6px 5px gray;
//   }

// `;

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player1: "",
      player2: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { player1, player2 } = this.state;
    this.props.names(player1, player2);
  }

  handleChange(e) {
    let player = e.target.id;
    // console.log('e', e.target.value)
    this.setState({
      [player]: e.target.value
    });
  };

  render() {
    return (

      <Holder>
        <Container>
          <form>
            <div className="form-group">
              <label>Name Player 1</label>
              <input
                type="text"
                id="player1"
                className="form-control"
                onChange={this.handleChange}
              />
              <label>Name Player 2</label>
              <input
                type="text"
                id="player2"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleClick} className="btn-primary">
              Submit
            </button>
          </form>
        </Container>
      </Holder>

    )
  }

}



export default Login;