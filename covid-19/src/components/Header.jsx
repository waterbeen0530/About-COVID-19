import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: auto;
  height: auto;
  padding-top: 35px;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const Title = styled.span`
  margin-left: 7px;
  font-weight: 600;
`;

function Header() {
  return (
    <>
      <TitleWrapper>
        <Title>코로나바이러스감영증-19(COVID-19)</Title>" 정보전달용"
      </TitleWrapper>
    </>
  );
}

export default Header;
