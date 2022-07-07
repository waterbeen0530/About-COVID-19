import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiRectangle } from "react-icons/bi";

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
    width: 123px;
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
      height: 80px;
      margin: 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function DecreaseStc() {
  const [statistics, setStatistics] = useState([]);

  const getData = () => {
    axios
      .request({
        url: "https://api.corona-19.kr/korea/?serviceKey=LnJWSjMIRqfEzUNTiQ3VuCo749kGlehKY",
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
      <div>
        <Headline>
          <h4>
            <BiRectangle />
          </h4>
          <h3>확진자수 1위</h3>
          <p>단위 : 퍼센트(%)</p>
        </Headline>
        <Info>
          <div>
            <strong>지역</strong>
            <p>{statistics[5]}</p>
          </div>
          <div>
            <strong>신규 확진자 수</strong>
            <p>{statistics[10]}</p>
          </div>
        </Info>
      </div>
      <div>
        <Headline>
          <h4>
            <BiRectangle />
          </h4>
          <h3>확진자수 2위</h3>
          <p>단위 : 퍼센트(%)</p>
        </Headline>
        <Info>
          <div>
            <strong>지역</strong>
            <p>{statistics[6]}</p>
          </div>
          <div>
            <strong>신규 확진자 수</strong>
            <p>{statistics[11]}</p>
          </div>
        </Info>
      </div>
      <div>
        <Headline>
          <h4>
            <BiRectangle />
          </h4>
          <h3>확진자수 3위</h3>
          <p>단위 : 퍼센트(%)</p>
        </Headline>
        <Info>
          <div>
            <strong>지역</strong>
            <p>{statistics[7]}</p>
          </div>
          <div>
            <strong>신규 확진자 수</strong>
            <p>{statistics[12]}</p>
          </div>
        </Info>
      </div>
      <div>
        <Headline>
          <h4>
            <BiRectangle />
          </h4>
          <h3>확진자수 4위</h3>
          <p>단위 : 퍼센트(%)</p>
        </Headline>
        <Info>
          <div>
            <strong>지역</strong>
            <p>{statistics[8]}</p>
          </div>
          <div>
            <strong>신규 확진자 수</strong>
            <p>{statistics[13]}</p>
          </div>
        </Info>
      </div>
      <div>
        <Headline>
          <h4>
            <BiRectangle />
          </h4>
          <h3>확진자수 5위</h3>
          <p>단위 : 퍼센트(%)</p>
        </Headline>
        <Info>
          <div>
            <strong>지역</strong>
            <p>{statistics[9]}</p>
          </div>
          <div>
            <strong>신규 확진자 수</strong>
            <p>{statistics[14]}</p>
          </div>
        </Info>
      </div>
    </>
  );
}
