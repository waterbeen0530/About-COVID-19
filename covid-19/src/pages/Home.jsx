import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainScreen from "../components/Homepage/MainScreen";
import NavBar from "../components/NavBar";
import VisualMotion from "../components/Homepage/VisualMotion";
import Footer from "../components/Homepage/Footer";
import PointInfoList from "../components/Homepage/PointInfoList";

const Page = styled.main``;

function Home() {
  return (
    <Page>
      <Header />
      <NavBar />
      <VisualMotion />
      <MainScreen />
      <Footer />
    </Page>
  );
}

export default Home;
