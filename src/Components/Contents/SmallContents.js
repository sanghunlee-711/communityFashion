import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

function SmallContents(props) {
  const { smallData } = props;
  const [sample, setSample] = useState([]);
  return (
    <SamllContainer>
      <img alt="smallPicture" src={smallData["image-src"]} />
      <SmallContentsTextWrapper>
        <IdTitleDivider>
          <SamllContentsTitle>{smallData.title}</SamllContentsTitle>
          <SmallContentsId>{smallData["user-id"]}</SmallContentsId>
        </IdTitleDivider>
        <SmallContentsContents>{smallData.contents}</SmallContentsContents>
      </SmallContentsTextWrapper>
    </SamllContainer>
  );
}

const SamllContentsTitle = styled.span`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.2rem;
`;

const SmallContentsId = styled(SamllContentsTitle)`
  font-size: 0.8rem;
  cursor: pointer;
  justify-content: space-around;
`;

const IdTitleDivider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SmallContentsContents = styled.span`
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const SamllContainer = styled.div`
  width: 27vw;
  img {
    width: 100%;
    height: 50vh;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    img {
      width: 100%;
      height: 50vh;
    }
    margin: 1vh 0;
  }
`;

const SmallContentsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1vh 0;
`;

export default SmallContents;
