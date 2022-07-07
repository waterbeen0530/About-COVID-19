import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import NavBar from "../common/NavBar";
import DomesticCountStc from "../CounterPage/DomesticCountStc";
import { RiArrowRightSLine } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RouteWrapper = styled.div`
  width: 1180px;
  h1 {
    margin: 0 0;
    padding: 8px 0 15px;
    border-bottom: 1px solid black;
  }
`;

const Address = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  p {
    padding: 0 8px;
  }
`;

export default function DomesticCount() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <RouteWrapper>
          <Address>
            <p>홈</p>
            <RiArrowRightSLine />
            <p>시도별 확진자 순위</p>
            <RiArrowRightSLine />
            <p>시도별 환진자 순위</p>
          </Address>
          <h1>시도별 확진자 순위</h1>
          <div>
            <h4>시도별 확진자 순위</h4>
            <p>코로나바이러스감염증-19 시도별 확진자 순위</p>
            <DomesticCountStc />
          </div>
        </RouteWrapper>
      </Container>
    </>
  );
}
