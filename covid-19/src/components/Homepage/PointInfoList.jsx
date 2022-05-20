import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 50;
  position: absolute;
  top: 55%;
  left: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: auto;
  table-layout: fixed;
  /* border: 1px solid red;
  animation-delay: 0.6s;
  animation-name: downMotion;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition: all 0.5s ease 0s;
  @keyframes downMotion {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  } */
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  div {
    width: 346px;
    height: 340px;
    margin: 10px 23px;
    display: flex;
    justify-content: center;
    border: solid 3px #637291;
    border-radius: 50px;
    background-color: #dfebf1;
    font-size: 40px;
    box-shadow: 5px 5px 5px rgb(100 100 100 / 30%);

    p {
      margin: 36px 0 36px;
      text-align: center;
    }
    #firstLink {
      background: url("https://ncv.kdca.go.kr/ncov/img/pointInfo_img_01.png")
        no-repeat;
      background-position: center bottom;
      background-size: 166px 140px;
      animation-delay: 0.5s;
      animation-name: downMotion;
      animation-duration: 0.5s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      transition: all 0.5s ease 0s;
    }
    #SecondLink {
      background: url("https://ncv.kdca.go.kr/ncov/img/pointInfo_img_02.png")
        no-repeat;
      background-position: center bottom;
      background-size: 146px 153px;
      animation-delay: 0.7s;
    }
    #ThirdLink {
      background: url("https://ncv.kdca.go.kr/ncov/img/pointInfo_img_04.png")
        no-repeat;
      background-position: center bottom;
      background-size: 216px 142px;
      animation-delay: 0.9s;
    }
    #FourthLink {
      background: url("	https://ncv.kdca.go.kr/ncov/img/pointInfo_img_03.png")
        no-repeat;
      background-position: center bottom;
      background-size: 244px 160px;
      animation-delay: 1.1s;
    }
    span {
      font-weight: 700 !important;
    }
  }
  #SecondBox {
    background-color: #f8f8f8;
  }
`;

function PointInfoList() {
  return (
    <Container>
      <Wrapper>
        <Table>
          <div>
            <p id="firstLink">
              <span>국내 </span>
              코로나19
              <br />
              <span>발생 현황</span>
            </p>
          </div>
          <div id="SecondBox">
            <p id="SecondLink">
              <span>국내 </span>
              코로나19
              <br />
              <span>예방 접종 현황</span>
            </p>
          </div>
        </Table>
        <Table>
          <div id="SecondBox">
            <p id="ThirdLink">
              <span>국내 </span>
              코로나 19
              <br />
              <span>카운터</span>
            </p>
          </div>
          <div>
            <p id="FourthLink">
              <span>시도별 </span>
              코로나 19
              <br />
              <span>발생 동향</span>
            </p>
          </div>
        </Table>
      </Wrapper>
    </Container>
  );
}

export default PointInfoList;
