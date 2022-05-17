import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FirstChart = styled.div`
  width: 100%;
  display: table;
  table-layout: fixed;
  justify-content: center;
  align-items: center;
  div {
    display: table-cell;
    border: 1px solid #cad5e8;
  }
  strong {
    height: 40px;
    padding: 5px 3px;
    display: table-cell;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #000;
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

const SecondChart = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  width: 100%;
  margin-top: 50px;
  display: table;
  table-layout: fixed;
  justify-content: center;
  align-items: center;

  border: 1px solid #cad5e8;

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

function DomesticStatistics() {
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

  const Area = statistics.map((arr) => (
    <Wrapper>
      <Div>
        <strong>지역</strong>
        <p>{}</p>
      </Div>
      <Div>
        <strong>확진자</strong>
        <p>{}</p>
      </Div>
      <Div>
        <strong>완치자</strong>
        <p>{}</p>
      </Div>
      <Div>
        <strong>사망자</strong>
        <p>{}</p>
      </Div>
    </Wrapper>
  ));

  return (
    <>
      <FirstChart>
        <div>
          <strong>국내 누적 확진자</strong>
          <p>{}</p>
        </div>
        <div>
          <strong>국내 누적 완치자</strong>
          <p>{}</p>
        </div>
        <div>
          <strong>국내 누적 사망자</strong>
          <p>{}</p>
        </div>
      </FirstChart>
      <SecondChart>{Area}</SecondChart>
    </>
  );
}

export default DomesticStatistics;
