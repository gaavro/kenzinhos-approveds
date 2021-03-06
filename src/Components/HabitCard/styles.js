import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:100;
  }
`;

export const MainContainer = styled.div`
  color: white;
  height: 300px;
  width: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: blue;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  border-radius: 20px;
  background-image: linear-gradient(#1d64cb, #741dcb);
  margin-bottom: 10px;
  margin-top: 10px;
  animation: ${fadeIn}1x;

  @media screen and (min-width: 769px) {
    background-image: linear-gradient(#1d64cb, #741dcb);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  h3 {
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
  }

  h4 {
    font-size: 14px;
  }
  h5 {
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;

    span {
      text-transform: capitalize;
    }
  }

  input {
    margin-top: 2px;
    width: 50px;
  }

  .formCompleted {
    .check {
      width: 20px;
      margin: 0;
      transform: translateY(4px);
    }
    label {
      font-size: 16px;
    }
    .yesOption {
      margin-right: 10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    font-size: 11px;
    width: 55px;
    height: 25px;
    margin: 5px 5px 5px 5px;
    border-radius: 6px;
  }

  .update:hover {
    color: white;
    background-color: green;
  }

  .update:active {
    color: black;
  }

  .delete:hover {
    color: white;
    background-color: red;
  }

  .delete:active {
    color: black;
  }
`;
