import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ul>
          <li>공지사항</li>
          <li>개인정보처리방침</li>
          <li>게시물/댓글 삭제요청</li>
        </ul>
        <CopyRight>
          <span>COPYRIGHT 2020 Stylefolks.com</span>
          <span>광고/제휴 문의는 ...</span>
        </CopyRight>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.96);
  margin: 5vh 0;
`;

const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 1vh;
  }
`;

const FooterWrapper = styled.section`
  border-top: 0.5px solid #b5b5b5;

  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  ul {
    margin: 1vh 0;

    li {
      margin: 1vh 0;
    }
  }
`;
