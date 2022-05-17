import React from "react";
import styled from "styled-components";
import DomesticSituation from "../components/DomesticSituation";
import Header from "../components/Header";
import MainScreen from "../components/MainScreen";
import NavBar from "../components/NavBar";
import VisualMotion from "../components/VisualMotion";

const Page = styled.main``;

function Home() {
  return (
    <Page>
      {/* <Header />
      <NavBar />
      <VisualMotion />
      <MainScreen /> */}
      <DomesticSituation />
    </Page>
  );
}

export default Home;
