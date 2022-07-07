import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import NavBar from "../common/NavBar";
import DecreaseStc from "../OccurrencePage/DecreaseStc";
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

export default function Decrease() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <RouteWrapper>
          <Address>
            <p>홈</p>
            <RiArrowRightSLine />
            <p>전일 대비 증감</p>
            <RiArrowRightSLine />
            <p>전일 대비 증감</p>
          </Address>
          <h1>전일 대비 증감</h1>
          <div>
            <h4>전일 대비 증감</h4>
            <p>코로나바이러스감염증-19 전일 대비 증감</p>
            <DecreaseStc />
          </div>
        </RouteWrapper>
      </Container>
    </>
  );
}
