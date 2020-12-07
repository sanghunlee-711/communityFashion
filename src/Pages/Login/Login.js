import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <LoginWrapper>
      <LoginTitle>
        <span>Log In</span>
      </LoginTitle>
      <LoginBox>
        <div>
          <span>User</span>
          <input placeholder="email" type="text" />
        </div>
        <div>
          <span>Password</span>
          <input placeholder="password" type="password" />
        </div>
      </LoginBox>
      <ButtonBox>
        <button type="submit">Log In</button>
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </ButtonBox>
      <ForgotPW>
        <Link to="/findpw">Forgot Password?</Link>
      </ForgotPW>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.main`
  width: 80vw;
  border: 1px solid black;
  margin: 10vh auto 15vh auto;
  padding: 2vh;
  border-radius: 3px;
`;
const ForgotPW = styled.div`
  margin: 1vh 0 0 1vh;
`;

const ButtonBox = styled.section`
  margin: 0.5vh 0;
  display: flex;
  font-size: 1rem;
  button {
    background-color: skyblue;
    width: 50%;
    height: 6vh;
    border-radius: 2px;
  }
  a {
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh 0;
    span {
      width: 100%;
      text-align: start;
      font-size: 1.2rem;
    }
    input {
      margin-top: 1vh;
      border: 1px solid black;
      height: 8vh;
      font-size: 1.5rem;
      width: 97%;
      padding: 1vh;
      border-radius: 2px;

      @media only screen and (maxwidth: 1000px) {
        height: 4vh;
      }
    }
  }
`;

const LoginTitle = styled.div`
  span {
    text-align: start;
    font-size: 1.5rem;
  }
  border-bottom: 1px solid black;
  padding-bottom: 1vh;
`;
