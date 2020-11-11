import React from 'react';
import styled from 'styled-components';


const BoardCon = styled.div`
  height: 345px;
    width: 345px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    box-shadow: 6px 6px 10px grey;

  #tile0 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    border-right: 5px solid black;
    border-bottom: 5px solid black;
  }
  #tile1 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    border-left: 5px solid black;
    border-right: 5px solid black;
    border-bottom: 5px solid black;

  }
  #tile2 {
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    border-left: 5px solid #000;
    border-bottom: 5px solid #000;
  }
  #tile3 {
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    cursor: pointer;
    font-size: 5em;
    font-weight: 700;
    border-bottom: 5px solid black;
    border-top: 5px solid black;
    border-right: 5px solid black;
  }
  #tile4 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    /* display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; */

    border: 5px solid black;
  }
  #tile5 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    border-top: 5px solid #000;
    border-left: 5px solid #000;
    border-bottom: 5px solid #000;
  }
  #tile6 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    /* border-right: 5px solid black;
    border-top: 5px solid black; */
    border-top: 5px solid #000;
    border-right: 5px solid #000;

  }
  #tile7 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    border-left: 5px solid black;
    border-right: 5px solid black;
    border-top: 5px solid black;
  }
  #tile8 {
    width: 110px;
    height: 110px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    border-left: 5px solid black;
    border-top: 5px solid black;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5em;
    font-weight: 700;
    width: 110px;
    height: 110px;
    color: black;
    background-color: white;

`;

const Board = ({ handleScore, endgame, turn, player1, player2 }) => {
  const generateTiles = () => {
    let all = [];
    for (let i = 0; i < 9; i++) {
      all.push('tile not-played')
    }
    return all;
  }

  const handleClick = (e) => {
    /* console.log('click', e.target.classList.length) */
    if (e.target.classList.length === 2) {
      play(e.target);
    }
    let allTiles = document.getElementsByClassName('not-played');
    if (allTiles.length < 1) {
      handleScore('tie');
      endgame(true);
      reset();
    }
  }

  const play = (tile) => {
    console.log('play')
    tile.classList.remove('not-played');
    if (player1) {
      tile.innerHTML = "X";
      turn("player1", false, "player2", true);
      if (diagonal('X') || row('X') || column('X')) {
        handleScore("player1");
        endgame(true);
        reset();
      }
    }
    if (player2) {
      tile.innerHTML = "O";
      turn("player2", false, "player1", true);
      if (diagonal('O') || row('O') || column('O')) {
        handleScore("player2");
        endgame(true);
        reset();
      }
    }
  }

  const diagonal = (play) => {
    let left = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile8").innerHTML
    ]
    let right = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile6").innerHTML
    ]
    if (left[0] === play && left[1] === play && left[2] === play) {
      return true;
    }
    if (right[0] === play && right[1] === play && right[2] === play) {
      return true;
    }
    return false;
  };

  const row = (play) => {
    let row1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile2").innerHTML
    ]
    let row2 = [
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile5").innerHTML
    ]
    let row3 = [
      document.getElementById("tile6").innerHTML,
      document.getElementById("tile7").innerHTML,
      document.getElementById("tile8").innerHTML
    ]
    if (row1[0] === play && row1[1] === play && row2[2] === play) {
      return true;
    }
    if (row2[0] === play && row2[1] === play && row2[2] === play) {
      return true;
    }
    if (row3[0] === play && row3[1] === play && row3[2] === play) {
      return true;
    }
    return false;
  };

  const column = (play) => {
    let column1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile6").innerHTML
    ]
    let column2 = [
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile7").innerHTML
    ]
    let column3 = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile5").innerHTML,
      document.getElementById("tile8").innerHTML
    ]
    if (column1[0] === play && column1[1] === play && column1[2] === play) {
      return true;
    }
    if (column2[0] === play && column2[1] === play && column2[2] === play) {
      return true;
    }
    if (column3[0] === play && column3[1] === play && column3[2] === play) {
      return true;
    }
    return false;
  };

  const reset = () => {
    let allTiles = document.getElementsByClassName('tile');
    for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].innerHTML = "";
      allTiles[i].classList.add("not-played");
    }
  };

  return (
    <BoardCon>
      {generateTiles().map((element, i) => {
        return (
          <div
            id={`tile${i}`}
            key={i}
            className={element}
            onClick={handleClick}
          />
        )
      })}
    </BoardCon>
  )
}

export default Board;