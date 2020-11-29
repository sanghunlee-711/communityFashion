import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import HideNav from "./HideNav";
// import ogoImage from '../../../public/images/stylefolkslogo.png'

export default function Nav() {
  const [navData, setNavData] = useState({});
  const [navKeys, setNavKeys] = useState([]);
  const [hideNavData, setHideNavData] = useState([]);
  const [eachKey, setEachKey] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const BaseURL = "https://sanghunlee-711.github.io/communityFashion";
    fetch(`${BaseURL}/data/data.json`, {})
      .then((res) => res.json())
      .then((res) => {
        setNavData(res["nav-category"]);
        setNavKeys(Object.keys(res["nav-category"]));
      });
  }, []);

  const showNavData = (key) => {
    setHideNavData(navData[key]);
    setEachKey(key);
    setToggle(true);
    console.log(toggle);
  };

  const toggleNav = () => {
    setToggle(false);
    console.log(toggle);
  };

  return (
    <NavContainer>
      <LoginWrapper>
        <span>Login</span>
        <span>SignUp</span>
      </LoginWrapper>
      <Link to="/">
        <LogoImage />
      </Link>
      <NavWrapper onMouseLeave={toggleNav}>
        <NavKeyWord onMouseOver={(el) => showNavData(el.target.innerText)}>
          {navKeys?.map((el, index) => (
            <li key={el + index}>
              <Link to={`/${el === "Total" ? "" : el}`}>{el} </Link>
            </li>
          ))}
        </NavKeyWord>
        <HidNavWrapper>
          <HideNav
            navData={navData}
            navKeys={navKeys}
            eachKey={eachKey}
            hideNavData={hideNavData}
            toggle={toggle}
            toggleNav={toggleNav}
          />
        </HidNavWrapper>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100vw;
  min-height: 140px;
  background-color: white;
  font-size: 1rem;
  color: gray;
`;

const HidNavWrapper = styled.div`
  position: relative;
  width: 100vw;
  /* margin: 0 auto; */
`;

const LogoImage = styled.div`
  background-image: url("https://media.vlpt.us/images/cloudlee711/post/f57ac95c-91ec-416d-8aad-6112b6369eee/stylefolkslogo.png");
  background-position: center;
  width: 300px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;
const NavKeyWord = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 2vh;
  margin-top: 1vh;
  position: relative;

  li {
    border-bottom: 2px solid white;
    transition: all 0.5s ease-in-out;
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 1em 0;

    &:hover {
      border-bottom: 2px solid #b5b5b5;
      color: olive;
    }
  }
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
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 1rem;
`;
