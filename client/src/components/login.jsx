import React, { useState } from 'react';
import styled from 'styled-components';
import { Holder, Container } from './Styles.jsx';


const Login = ({ names }) => {
  const [ player1, setPlayer1] = useState("");
  const [ player2, setPlayer2] = useState("");

  const handleClick = (e) => {
    names(player1, player2);
  }

  const handleChange = (e) => {
    let player = e.target.id;
    (player === 'player1') ? setPlayer1(e.target.value) : setPlayer2(e.target.value);
  }

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
            onChange={handleChange}
          />
          <label>Name Player 2</label>
          <input
            type="text"
            id="player2"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="btn-primary">
          Submit
        </button>
      </form>
    </Container>
  </Holder>


  )
}

// class Login extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       player1: "",
//       player2: "",
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     const { player1, player2 } = this.state;
//     this.props.names(player1, player2);
//   }

//   handleChange(e) {
//     let player = e.target.id;
//     // console.log('e', e.target.value)
//     this.setState({
//       [player]: e.target.value
//     });
//   };

//   render() {
//     return (

//       <Holder>
//         <Container>
//           <form>
//             <div className="form-group">
//               <label>Name Player 1</label>
//               <input
//                 type="text"
//                 id="player1"
//                 className="form-control"
//                 onChange={this.handleChange}
//               />
//               <label>Name Player 2</label>
//               <input
//                 type="text"
//                 id="player2"
//                 className="form-control"
//                 onChange={this.handleChange}
//               />
//             </div>
//             <button onClick={this.handleClick} className="btn-primary">
//               Submit
//             </button>
//           </form>
//         </Container>
//       </Holder>

//     )
//   }

// }



export default Login;