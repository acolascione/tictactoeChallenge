import styled from 'styled-components';



export const Holder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
`;


export const Container = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: white;
    width: 300px;
    box-shadow: 6px 6px 5px gray;

    .btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      cursor: pointer;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    .form-group {
      margin-bottom: 1rem;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
      font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    }



    .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;



label {
    display: inline-block;
    margin-bottom: .5rem;

`;

export const NavBarCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;

  box-shadow: 0 2px 5px grey;
  width: 100%;
  margin: 0 auto;

`;

export const Title = styled.h1`
  width: 30%;
  font-size: 2rem;
  margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    align-text: center;
    margin-top: 0;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

`;

export const Statistics = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  width: 70%;

`;

export const GameCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  p {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    display: block;
    line-height: 1.5em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 24px;
    font-weight: 500;
  }

`;