import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import NavBar from "../common/NavBar";
import AreaVaccineStc from "./AreaVaccineStc";
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

export default function AreaVaccine() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <RouteWrapper>
          <Address>
            <p>홈</p>
            <RiArrowRightSLine />
            <p>지역별 예방 접종 현황</p>
            <RiArrowRightSLine />
            <p>지역별 예방 접종 현황</p>
          </Address>
          <h1>지역별 예방 접종 현황</h1>
          <div>
            <h4>지역별 예방 접종 현황</h4>
            <p>코로나바이러스감염증-19 지역별 예방 접종 현황</p>
            <AreaVaccineStc />
          </div>
        </RouteWrapper>
      </Container>
    </>
  );
}
