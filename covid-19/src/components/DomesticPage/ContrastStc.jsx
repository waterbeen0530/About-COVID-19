import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiRectangle } from "react-icons/bi";

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

function ContrastStc() {
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

  return (
    <>
      <Headline>
        <h4>
          <BiRectangle />
        </h4>
        <h3>전일 대비 발생 현황</h3>
        <p>단위 : 명</p>
      </Headline>
      <FirstChart>
        <div>
          <strong>전일 대비(확진)</strong>
          <p>{statistics.length && statistics[0].incDec}</p>
        </div>
        <div>
          <strong>전일대비(확진-지역)</strong>
          <p>{statistics.length && statistics[0].incDecK}</p>
        </div>
        <div>
          <strong>전일대비(확진-해외)</strong>
          <p>{statistics.length && statistics[0].incDecF}</p>
        </div>
      </FirstChart>
    </>
  );
}
export default ContrastStc;
