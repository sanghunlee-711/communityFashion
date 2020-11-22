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
        <span>COPYRIGHT 2020 Stylefolks.com</span>
        <span>광고/제휴 문의는 ...</span>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.96);
`;

const FooterWrapper = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;
