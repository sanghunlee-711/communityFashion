import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import SmallContents from "../../Components/Contents/SmallContents";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { startFetch, navToggle } from "../../redux/actions/action";

export default function Main() {
  const dispatch = useDispatch();
  const dataCheck = useSelector((state) => state.doFetch);

  useEffect(() => {
    dispatch(startFetch(2));
  }, [dispatch]);

  const checkFunction = () => {
    console.log("dataCheck", dataCheck.data);
  };

  return (
    <MainContainer onClick={checkFunction}>
      <BigContentsWrapper>
        {dataCheck !== undefined && dataCheck.data !== undefined
          ? dataCheck?.data["main-data"]["big-data"]?.map((el, index) => (
              <BigContents key={el.title + index}>
                <img alt="bigPhoto" src={el["image-src"]} />
              </BigContents>
            ))
          : "OnLoading"}
      </BigContentsWrapper>
      <SmallContentsWrapper>
        {dataCheck !== undefined && dataCheck.data !== undefined
          ? dataCheck?.data["main-data"]["small-data"]?.map((el, index) => (
              <SmallContents smallData={el} key={el.title + index} />
            ))
          : "OnLoading"}
      </SmallContentsWrapper>
    </MainContainer>
  );
}

const BigContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* @media only screen and (max-width: 1000px) {
    display: none;
  } */
`;

const MainContainer = styled.main`
  /* margin-top: 10vh; */
  display: flex;
  justify-content: center;
  background-color: white;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BigContents = styled.div`
  width: 30vw;
  height: 80vh;
  margin-top: 1vh;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 50vh;
    margin: 0;
  }
`;

const SmallContentsWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 50vw;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 80vw;
  }
`;
