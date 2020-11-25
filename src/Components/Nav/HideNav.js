import React from "react";
import styled from "styled-components";

export default function HideNav(props) {
  const { navData, navKeys, hideNavData, eachKey, toggle } = props;

  return (
    <HideNavContainer toggle={toggle}>
      <HideNavTitle>{eachKey}</HideNavTitle>
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

const HideNavTitle = styled.span`
  width: 100%;
  text-align: center;
  display: block;
  border: 1px solid gray;
  border-radius: 3px;
`;

const KeyWordWrapper = styled.ul`
  li {
    text-align: center;
    margin: 0.5vh 0;
    transition: all 0.5s ease-in-out;
    border: 1px solid white;

    &:hover {
      border: 1px solid gray;
      border-radius: 3px;
    }
  }
`;
