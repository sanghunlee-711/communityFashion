import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <MainContainer>
      <PictureCheck />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  /* margin-top: 10vh; */
  display: flex;
  justify-content: center;
  background-color: white;
`;
const PictureCheck = styled.div`
  background-image: url("https://cdn.shopify.com/s/files/1/0305/5853/files/modern_classic_1024x1024.jpg?v=1538508496");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
`;
