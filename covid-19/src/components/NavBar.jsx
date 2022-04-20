import React from "react";
import styles from "../styles/NavBar.module.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #064772;
`;

const NavWrapper = styled.div`
  width: 1180px;
  display: table;
  table-layout: fixed;
`;

function NavBar() {
  return (
    <Container>
      <NavWrapper className={styles.NavWrapper}>
        <a href="">코로나19, 오미크론</a>
        <a href="">코로나 감염 예방</a>
        <a href="">검사</a>
        <a href="">코로나19 감염 확진</a>
        <a href="">재택 치료</a>
        <a href="">먹는 치료제</a>
        <a href="">접촉자·자가격리</a>
        <a href="">해외 입국자 안내</a>
      </NavWrapper>
    </Container>
  );
}

export default NavBar;
