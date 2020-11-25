import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <MainContainer>
      <BigContents>
        <img
          alt="bigPhoto"
          src="https://cdn.shopify.com/s/files/1/0305/5853/files/modern_classic_1024x1024.jpg?v=1538508496"
        />
      </BigContents>
      <SmallContentsWrapper>
        <SmallContents>
          <img
            alt="smallPicture"
            src="https://cdn.shopify.com/s/files/1/0305/5853/files/modern_classic_1024x1024.jpg?v=1538508496"
          />
          <span>Title</span>
          <span>specific data</span>
          <span>contents</span>
        </SmallContents>
        <SmallContents>
          <img
            alt="smallPicture"
            src="https://cdn.shopify.com/s/files/1/0305/5853/files/modern_classic_1024x1024.jpg?v=1538508496"
          />
          <span>Title</span>
          <span>specific data</span>
          <span>contents</span>
        </SmallContents>
      </SmallContentsWrapper>
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

const BigContents = styled.div`
  width: 30vw;
  height: 80vh;
  margin: 2vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SmallContentsWrapper = styled.section`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  align-items: center;
  /* width: 30vw;
  height: 40vh; */
`;

const SmallContents = styled.div`
  width: 30vw;
  height: 40vh;
  margin: 2vh;
  img {
    width: 100%;
    height: 100%;
  }
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
