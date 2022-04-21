import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

const Title = styled.span`
  margin-left: 7px;
  font-weight: 600;
`;

const SmallTitle = styled.p`
  width: 1180px;
  margin: 0 0 20px 0;
  font-size: 14px;
  color: #444;
  display: flex;
  justify-content: flex-end;
`;

function Header() {
  return (
    <>
      <TitleWrapper>
        <div>
          <Title>코로나바이러스감영증-19(COVID-19)</Title>" 정보전달용"
        </div>

        <div>
          <SmallTitle>코로나바이러스감염증-19(COVID-19)</SmallTitle>
        </div>
      </TitleWrapper>
    </>
  );
}

export default Header;
