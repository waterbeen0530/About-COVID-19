import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainScreen from "../components/MainScreen";
import NavBar from "../components/NavBar";
import VisualMotion from "../components/VisualMotion";

const Button = styled.button`
  width: 300px;
  height: 100px;
  border-color: purple;
  border-radius: 0;
  color: purple;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: purple;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }
`;

const Page = styled.main``;

function Home() {
  return (
    <Page>
      <Header />
      <NavBar />
      <VisualMotion />
      <MainScreen />

      <Button className="fifth">버튼</Button>
    </Page>
  );
}

export default Home;
