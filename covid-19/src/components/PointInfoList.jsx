import React from "react";
import styled from "styled-components";

const List = styled.div`
  position: absolute;

  background: #000;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 36px;
`;

const A1 = styled.a`
  background: #dfebf1;
`;

const A2 = styled.a`
  background: #f8f8f8;
`;

function PointInfoList() {
  return (
    <List>
      <Item>
        <A1 href="">
          <h3>
            <span>코로나19</span>와<span>오미크론 변이</span>
          </h3>
        </A1>
        <A2 href="">
          <h3>
            코로나19<span>감염 예방</span>
          </h3>
        </A2>
        <A1 href="">
          <h3>
            코로나19<span>검사</span>
          </h3>
        </A1>
        <A2 href="">
          <h3>
            <span>코로나19 감염</span>되었을때
          </h3>
        </A2>
        <A1 href="">
          <h3>
            <span>재택치료</span>
          </h3>
        </A1>
        <A2 href="">
          <h3>
            <span>접촉자 자가격리</span>
          </h3>
        </A2>
      </Item>
    </List>
  );
}

export default PointInfoList;
