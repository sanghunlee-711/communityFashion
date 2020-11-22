import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import HideNav from "./HideNav";
// import ogoImage from '../../../public/images/stylefolkslogo.png'

export default function Nav() {
  const [navData, setNavData] = useState({});
  const [navKeys, setNavKeys] = useState([]);

  useEffect(() => {
    fetch("/data/data.json", {})
      .then((res) => res.json())
      .then((res) => {
        setNavData(res["nav-category"]);
        setNavKeys(Object.keys(res["nav-category"]));
      });
  }, []);

  return (
    <NavContainer>
      <LoginWrapper>
        <span>Login</span>
        <span>SignUp</span>
      </LoginWrapper>
      <NavWrapper>
        <LogoImage
          alt="Loog"
          src="https://media.vlpt.us/images/cloudlee711/post/f57ac95c-91ec-416d-8aad-6112b6369eee/stylefolkslogo.png"
        />
        <ul>
          {navKeys?.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </NavWrapper>
      <HideNav navData={navData} navKeys={navKeys} />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  min-height: 140px;
  /* background-color: rgba(255, 255, 255, 0.96); */
  background-color: white;
  font-size: 1rem;
  color: gray;
  /* margin: auto 0; */

  /* position: fixed;
  top: 0;
  left: 0; */
`;

const LogoImage = styled.img`
  width: 120px;
  height: 140px;
`;

const LoginWrapper = styled.div`
  position: absolute;
  right: 10px;
  margin: 10px 0;
  span {
    margin: 0 20px;
  }
`;

const NavWrapper = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 1.5rem;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    li {
      margin: 0 10px;
    }
  }
`;
