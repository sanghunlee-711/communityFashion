import React from "react";
import styled from "styled-components";

export default function HideNav(props) {
  const { navData, navKeys } = props;

  return (
    <HideNavContainer>
      <div>
        {navKeys.map((el) => (
          <li>{el}</li>
        ))}
      </div>
    </HideNavContainer>
  );
}

const HideNavContainer = styled.section`
  width: 100vw;
  height: 10vh;
  z-index: 100;
`;
