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
      <SmallContentsContainer>
        <SmallContentsWrapper>
          {dataCheck !== undefined && dataCheck.data !== undefined
            ? dataCheck?.data["main-data"]["small-data"]?.map((el, index) => (
                <SmallContents smallData={el} key={el.title + index} />
              ))
            : "OnLoading"}
        </SmallContentsWrapper>
        <SmallContentsWrapper>
          {dataCheck !== undefined && dataCheck.data !== undefined
            ? dataCheck?.data["main-data"]["small-data"]?.map((el, index) => (
                <SmallContents smallData={el} key={el.title + index} />
              ))
            : "OnLoading"}
        </SmallContentsWrapper>
      </SmallContentsContainer>
    </MainContainer>
  );
}

const BigContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 44%;

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

const SmallContentsContainer = styled.main`
  display: flex;
  justify-content: flex-end;
  width: 56%;
`;

const BigContents = styled.div`
  height: 80vh;
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
  border-left: 1px solid gray;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  /* width: 44%; */
  /* padding: 0 2% 0 0; */
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 80vw;
  }
`;
