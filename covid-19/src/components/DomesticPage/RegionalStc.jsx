import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import NavBar from "../NavBar";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiRectangle } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Explanation = styled.div`
  h1 {
    margin: 0 0;
    padding: 8px 0 15px;
    border-bottom: 1px solid #000;
  }
`;

const Address = styled.div`
  width: 1180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    padding: 0 8px;
  }
`;

const ConWrapper = styled.div`
  width: 1180px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 100%;
    margin: 20px 0;
    display: flex;
    align-items: center;
  }

  h4 {
    margin: 0 0 0 8px;
    color: #47a8d1;
  }
  h3 {
    width: 1100px;
    margin: 0 0;
    padding: 0 0 0 8px;
  }
  p {
    width: 70px;
  }
`;

const Info = styled.div`
  display: flex;
  div {
    width: 100%;
    margin-bottom: 50px;
    display: table;
    table-layout: fixed;
    justify-content: center;
    align-items: center;
    border: 1px solid #cad5e8;
  }

  strong {
    width: 100%;
    height: 40px;
    display: table-cell;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7faff;
    border-top: 2px solid #6d88b7;
  }

  p {
    height: 80px;
    margin: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #444;
    border-top: 1px solid #cad5e8;
  }
`;

function RegionalStc() {
  const [statistics, setStatistics] = useState([]);

  const getData = () => {
    axios
      .request({
        url: "https://api.corona-19.kr/korea/beta/?serviceKey=LnJWSjMIRqfEzUNTiQ3VuCo749kGlehKY",
        method: "GET",
      })
      .then(({ data }) => {
        const arr = Object.keys(data)
          .filter((key) => key !== "API")
          .map((key) => {
            return data[key];
          });
        console.log(arr);
        setStatistics(arr);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const Area = statistics.slice(1).map((arr) => (
    <Wrapper>
      <Headline>
        <h4>
          <BiRectangle />
        </h4>
        <h3>{arr.countryNm} 누적 발생 현황</h3>
        <p>단위 : 명</p>
      </Headline>
      <Info>
        <div>
          <strong>지역</strong>
          <p>{arr.countryNm}</p>
        </div>
        <div>
          <strong>확진자</strong>
          <p>{arr.totalCnt}</p>
        </div>
        <div>
          <strong>완치자</strong>
          <p>{arr.isolCnt}</p>
        </div>
        <div>
          <strong>사망자</strong>
          <p>{arr.deathCnt}</p>
        </div>
      </Info>
    </Wrapper>
  ));
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Explanation>
          <Address>
            <p>홈</p>
            <RiArrowRightSLine />
            <p>지역별 발생 현황</p>
          </Address>
          <h1>지역별 발생 현황</h1>
          <div>
            <h4>지역별 발생 현황</h4>
            <p>코로나바이러스감염증-19 지역별 발생 현황</p>
          </div>
        </Explanation>

        <ConWrapper>
          <div>{Area}</div>
        </ConWrapper>
      </Container>
    </>
  );
}
export default RegionalStc;
