import React from "react";
import styled from "styled-components";

export default function HideNav(props) {
  const { navData, navKeys, hideNavData, eachKey, toggle } = props;

  return (
    <HideNavContainer toggle={toggle}>
      <HideNavTitle>
        <SmallWrapper>{eachKey}</SmallWrapper>
      </HideNavTitle>
      <KeyWordWrapper>
        {hideNavData?.map((el, index) => (
          <li key={hideNavData[index]}>{el}</li>
        ))}
      </KeyWordWrapper>
    </HideNavContainer>
  );
}

const HideNavContainer = styled.section`
  position: absolute;

  display: ${(props) => (props.toggle ? "static" : "none")};
  width: 100%;
  z-index: 100;
  background-color: white;
  ul {
    li {
      text-align: center;
    }
  }
`;

const HideNavTitle = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SmallWrapper = styled.span`
  border: 1px solid #b5b5b5;
  border-radius: 3px;
  width: 20%;
  background-color: #b5b5b5;
  color: white;
`;

const KeyWordWrapper = styled.ul`
  li {
    text-align: center;
    margin: 0.5vh 0;
    transition: all 0.5s ease-in-out;
    color: #b5b5b5;
    &:hover {
      color: black;
    }
  }
`;
