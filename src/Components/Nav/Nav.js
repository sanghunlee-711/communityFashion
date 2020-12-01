import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import HideNav from "./HideNav";
import ogoImage from "../../data/images/stylefolkslogo.png";

export default function Nav() {
  const [navData, setNavData] = useState({});
  const [navKeys, setNavKeys] = useState([]);
  const [hideNavData, setHideNavData] = useState([]);
  const [eachKey, setEachKey] = useState("");
  const [toggle, setToggle] = useState(false);
  const [burgerToggle, setBurgerToggle] = useState(false);
  const [burgerDetail, setBurgerDetail] = useState("");

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
  };

  const toggleNav = () => {
    setToggle(false);
  };
  const burgerToggling = () => {
    setBurgerToggle(!burgerToggle);
  };

  const ShowBurgerDetail = (keyElements) => {
    setBurgerDetail(keyElements.target.innerText);
  };

  return (
    <NavContainer>
      <BurgerButton onClick={burgerToggling} />
      <BurgerNav
        burgerToggle={burgerToggle}
        onClick={(el) => showNavData(el.target.innerText)}
      >
        <QuitButton onClick={burgerToggling} />
        <ul>
          {navKeys?.map((keyElements, index) => (
            <li key={keyElements + index}>
              <BurgerTitleKey
                onClick={(keyElements) => ShowBurgerDetail(keyElements)}
              >
                {keyElements}
              </BurgerTitleKey>
              <BurgerDetailedNav
                key={keyElements}
                keyElements={keyElements}
                burgerDetail={burgerDetail}
              >
                {navData[keyElements].map((detail, index) => (
                  <Link
                    to={`/menu/${keyElements}/${detail}`}
                    key={detail + index}
                    onClick={burgerToggling}
                  >
                    <li key={detail + index}>{detail}</li>
                  </Link>
                ))}
              </BurgerDetailedNav>
            </li>
          ))}
          <li>Login</li>
          <li>SignUp</li>
        </ul>
      </BurgerNav>
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
        <HideNavWrapper>
          <HideNav
            navData={navData}
            navKeys={navKeys}
            eachKey={eachKey}
            hideNavData={hideNavData}
            toggle={toggle}
            toggleNav={toggleNav}
          />
        </HideNavWrapper>
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

const BurgerTitleKey = styled.span`
  color: red;
`;

const BurgerNav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
  display: ${(props) => (props.burgerToggle ? "static" : "none")};
  ul {
    li {
      margin: 1vh 0;
      text-align: center;
    }
  }
  @media only screen and (max-width: 1000px) {
  }
`;

const BurgerDetailedNav = styled.ul`
  display: ${(props) =>
    props.burgerDetail === props.keyElements ? "static" : "none"};
`;
const QuitButton = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2i7Fb7jCfqGSrjSYZpm6z5EJ-QGDcRuHNqA&usqp=CAU");
  position: absolute;
  right: 10px;
  top: 10px;
  width: 15px;
  height: 15px;
  background-size: cover;
  background-position: center;
  z-index: 1000;
  background-color: white;
`;

const HideNavWrapper = styled.div`
  position: relative;
  width: 100vw;
`;
const BurgerButton = styled.div`
  background-image: url("data:image/png;base64,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");
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
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
  @media only screen and (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    span {
      display: block;
      width: 100%;
      margin: 0;
      height: 100%;
      text-align: center;
      line-height: 2rem;
      border: 1px solid black;
    }
    span:nth-child(1) {
      border-right-color: white;
    }
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
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
