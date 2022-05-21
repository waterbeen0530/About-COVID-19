import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
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
  text-align: center;
  animation-delay: 0.5s;
  animation-name: leftMotion;
  animation-duration: 0.7s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes leftMotion {
    0% {
      transform: translateX(-60px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

const RedBar = styled.span`
  position: absolute;
  transform-origin: 0px 0px;
  display: inline-block;
  width: 443px;
  height: 13px;
  margin-left: 17px;
  background: url("https://ncv.kdca.go.kr/ncov/img/red_bar.png") no-repeat;
  animation-delay: 1.5s;
  animation-name: widthMotion;
  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes widthMotion {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scaleX(100%);
      opacity: 1;
    }
  }
`;

const Point = styled.p`
  width: auto;
  height: auto;
  margin: 10px 0 0 0;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  animation-delay: 1s;
  animation-name: rightMotion;
  animation-duration: 0.7s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition: all 0.5s ease-in-out 0s;
  span {
    font-weight: 700 !important;
  }
  @keyframes rightMotion {
    0% {
      transform: translateX(60px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

function VisualMotion() {
  return (
    <Container>
      <TitleWrapper>
        <Covid>코로나 바이러스 감염증-19</Covid>
        <RedBar></RedBar>
        <Point>
          <span>핵심정보</span>를 안내해 드립니다.
        </Point>
      </TitleWrapper>
    </Container>
  );
}

export default VisualMotion;
