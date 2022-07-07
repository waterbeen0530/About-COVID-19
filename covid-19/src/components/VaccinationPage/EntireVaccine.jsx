import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import NavBar from "../common/NavBar";
import EntireVaccineStc from "../VaccinationPage/EntireVaccineStc";
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

function EntireVaccine() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <RouteWrapper>
          <Address>
            <p>홈</p>
            <RiArrowRightSLine />
            <p>국내 예방 접종 현황</p>
            <RiArrowRightSLine />
            <p>국내 예방 접종 현황</p>
          </Address>
          <h1>국내 예방 접종 현황</h1>
          <div>
            <h4>국내 예방 접종 현황</h4>
            <p>코로나바이러스감염증-19 국내 예방 접종 현황</p>
            <EntireVaccineStc />
          </div>
        </RouteWrapper>
      </Container>
    </>
  );
}
export default EntireVaccine;
