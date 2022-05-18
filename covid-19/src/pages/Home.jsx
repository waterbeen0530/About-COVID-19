import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainScreen from "../components/MainScreen";
import NavBar from "../components/NavBar";
import VisualMotion from "../components/VisualMotion";
import Footer from "../components/Footer";

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
