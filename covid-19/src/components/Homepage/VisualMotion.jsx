import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 520px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  background: url("https://ncv.kdca.go.kr/ncov/img/main_visual_01.jpg")
    no-repeat 50% 100%;
`;

const TitleWrapper = styled.div`
  width: auto;
`;

const Covid = styled.p`
  width: auto;
  height: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: 700;
  color: #ff6c78;
`;

const RedBar = styled.span`
  width: 443px;
  height: 13px;
  background: url("https://ncv.kdca.go.kr/ncov/img/red_bar.png");
`;

const Point = styled.p`
  width: auto;
  height: auto;
  margin: 10px 0 0 0;
  font-size: 60px;
  font-weight: 300;
  span {
    font-weight: 700 !important;
  }
`;

function VisualMotion() {
  return (
    <Container>
      <TitleWrapper>
        <Covid>
          코로나 바이러스 감염증-19
          <RedBar></RedBar>
        </Covid>
        <Point>
          <span>핵심정보</span>를 안내해 드립니다.
        </Point>
      </TitleWrapper>
    </Container>
  );
}

export default VisualMotion;
