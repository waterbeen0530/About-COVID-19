import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3ebf7;

  span {
    position: relative;
    font-size: 30px;
    &:before {
      content: "";
      position: absolute;
      left: -20px;
      top: -40px;
      width: 87px;
      height: 38px;
      background: url("https://ncv.kdca.go.kr/ncov/img/ribbon.png") no-repeat;
    }
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -10px;
      width: 61px;
      height: 6px;
      background: url("https://ncv.kdca.go.kr/ncov/img/news_bar.png") no-repeat;
    }
  }
  h3 {
    margin: 10px 0 20px 0;
    font-size: 23px;
  }
  p {
    margin: auto 0 80px 0;
    font-size: 14px;
  }
`;

const Cover = styled.div`
  display: flex;
`;

const PlusInfo = styled.div`
  /* position: absolute;
  top: 170px;
  left: 200px; */
  display: flex;
  flex-direction: column;
  button {
    margin: 20px 30px 0 0;
    border: none;
    background-color: #d3ebf7;
    font-size: 18px;
    transition: all 0.4s;
  }
  button:hover {
    color: #ff6c78;
  }
`;

const Section = styled.div`
  width: auto;
  height: auto;
  margin-left: 50px;
`;

const Wrapper = styled.div`
  width: 850px;
  margin: 20px 0;
  border-bottom: 1px solid rgba(52, 81, 108, 0.2);
  button {
    width: 130px;
    height: 38px;
    margin-top: 22px;
    border: none;
    border-radius: 23px;
    background-color: #34516c;
    color: #fff;
    font-size: 16px;
    transition: all 0.4s;
  }
  button:hover {
    background-color: #ff6c78;
  }
`;

const MainScreen = () => {
  return (
    <Container>
      <Cover>
        <PlusInfo>
          <span>참고자료</span>
          <a href="https://www.kdca.go.kr/index.es?sid=a2" target="_blank">
            <button>+더보기</button>
          </a>
        </PlusInfo>

        <Section>
          <Wrapper>
            <a href="https://ncv.kdca.go.kr/ncov/" target="_blank">
              <button>바로가기</button>
            </a>

            <h3>코로나바이러스감염증-19(covid-19) 일반인용</h3>
            <p>코로나바이러스감염증-19(covid-19) 일반인용 바로가기</p>
          </Wrapper>
          <Wrapper>
            <a href="http://ncov.mohw.go.kr/" target="_blank">
              <button>바로가기</button>
            </a>
            <h3>코로나바이러스감염증-19</h3>
            <p>코로나바이러스감염증-19 정식 홈페이지</p>
          </Wrapper>
        </Section>
      </Cover>
    </Container>
  );
};

export default MainScreen;
