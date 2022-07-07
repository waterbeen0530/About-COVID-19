import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import VisualMotion from "../components/Homepage/VisualMotion";
import PointInfoList from "../components/Homepage/PointInfoList";
import MainScreen from "../components/Homepage/MainScreen";
import Footer from "../components/Homepage/Footer";

const Page = styled.main``;

const Wrapper = styled.div`
  position: relative;
`;

function Home() {
  return (
    <Page>
      <Header />
      <NavBar />
      <Wrapper>
        <VisualMotion />
        <PointInfoList />
      </Wrapper>
      <MainScreen />
      <Footer />
    </Page>
  );
}

export default Home;
