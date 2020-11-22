import React from "react";
import styled from "styled-components";

export default function Youtube() {
  return (
    <div>
      <YoutubeContainer>
        <li>최겨울</li>
        <li>핏더사이즈</li>
        <li>최겨울</li>
      </YoutubeContainer>
    </div>
  );
}

const YoutubeContainer = styled.ul`
  color: red;
`;
