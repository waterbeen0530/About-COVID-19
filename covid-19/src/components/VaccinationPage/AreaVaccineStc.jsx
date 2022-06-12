import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiRectangle } from "react-icons/bi";

const Wrapper = styled.div``;

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
  width: 1180px;
  margin-bottom: 50px;
  display: table;
  table-layout: fixed;
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

  div {
    display: table-cell;
    border: 1px solid #cad5e8;
    p {
      text-align: center;
    }
  }
`;

export default function AreaVaccineStc() {
  const [statistics, setStatistics] = useState([]);

  const getData = () => {
    axios
      .request({
        url: "https://api.corona-19.kr/korea/vaccine/?serviceKey=LnJWSjMIRqfEzUNTiQ3VuCo749kGlehKY",
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
          <strong>1차</strong>
          <p>{statistics.length && statistics[0].vaccine_1.vaccine_1}</p>
        </div>
        <div>
          <strong>2차</strong>
          <p>{statistics.length && statistics[0].vaccine_1.vaccine_1}</p>
        </div>
        <div>
          <strong>3차</strong>
          <p>{statistics.length && statistics[0].vaccine_1.vaccine_1}</p>
        </div>
      </Info>
    </Wrapper>
  ));

  return (
    <>
      <div>{Area}</div>
    </>
  );
}
