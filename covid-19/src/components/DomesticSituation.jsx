import React from "react";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const RouteWrapper = styled.div`
  width: 1180px;
  h1 {
    margin: 0 0;
    padding: 8px 0 15px;
    border-bottom: 1px solid black;
  }
`;

const Route = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

function DomesticSituation() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <RouteWrapper>
          <Route>
            <a href="">홈</a>
            <p>></p>
            <a href="">국내 발생 현황</a>
          </Route>
          <h1>국내 발생 현황</h1>
        </RouteWrapper>
      </Container>
    </>
  );
}

export default DomesticSituation;
