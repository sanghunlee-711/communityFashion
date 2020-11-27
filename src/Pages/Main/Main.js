import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Main() {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json", {})
      .then((res) => res.json())
      .then((res) => setMainData(res["main-data"]));
  }, []);

  return (
    <MainContainer>
      <BigContentsWrapper>
        {mainData["big-data"]?.map((el, index) => (
          <BigContents>
            <img alt="bigPhoto" src={el["image-src"]} />
          </BigContents>
        ))}
      </BigContentsWrapper>
      <SmallContentsWrapper>
        {mainData["small-data"]?.map((el) => (
          <SmallContents>
            <img alt="smallPicture" src={el["image-src"]} />
            <SmallContentsTextWrapper>
              <IdTitleDivider>
                <SamllContentsTitle>{el.title}</SamllContentsTitle>
                <SmallContentsId>{el["user-id"]}</SmallContentsId>
              </IdTitleDivider>
              <SmallContentsContents>{el.contents}</SmallContentsContents>
            </SmallContentsTextWrapper>
          </SmallContents>
        ))}
      </SmallContentsWrapper>
      {/* <SmallContents>
        <img
          alt="smallPicture"
          src="https://cdn.shopify.com/s/files/1/0305/5853/files/modern_classic_1024x1024.jpg?v=1538508496"
        />
        <span>Title</span>
        <span>specific data</span>
        <span>contents</span>
      </SmallContents> */}
    </MainContainer>
  );
}

const BigContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  /* margin-top: 10vh; */
  display: flex;
  justify-content: center;
  background-color: white;
`;

const BigContents = styled.div`
  width: 30vw;
  height: 80vh;
  margin: 2vh auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SmallContentsWrapper = styled.section`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 50vw;
  margin: 2vh 0;
  /* width: 30vw;
  height: 40vh; */
`;

const SamllContentsTitle = styled.span`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.2rem;
`;

const SmallContentsId = styled(SamllContentsTitle)`
  font-size: 0.8rem;
  cursor: pointer;
`;

const IdTitleDivider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SmallContentsContents = styled.span`
  color: gray;
`;

const SmallContents = styled.div`
  width: 20vw;
  margin: auto;
  img {
    width: 100%;
    height: 50vh;
  }
`;

const SmallContentsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1vh 0;
`;
