import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #173e62;
  color: #fff;
  p {
    margin: 0 0;
    padding: 20px 0 60px 0;
  }
`;

const Wrapper = styled.div`
  margin: 0 0 0 60px;
  padding-top: 50px;
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <p>상담안내 : 보건소, 질병관리청 콜센터 1339, 지역번호 + 120</p>
      </Wrapper>
    </Container>
  );
}
export default Footer;
