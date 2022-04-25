import React from "react";
import styles from "../styles/NavBar.module.css";
import styled from "styled-components";

const Container = styled.div`
  background: #064772;
`;

const NavVar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.ul`
  width: 11180px;
  margin: 0 0;
  padding: 21px 300px 16px 300px;
  display: table;
  table-layout: fixed;
  li {
    display: table-cell;
    list-style: none;
  }
  a {
    color: #fff;
  }
`;

const DropVar = styled.div`
  width: 1180px;
  margin: 0 auto;
  padding: 0 300px;
  display: table;
  table-layout: fixed;
`;

const DropDown = styled.ul`
  padding: 0 auto;
  display: table-cell;

  a {
    color: #fff;
  }
`;

function NavBar() {
  return (
    <Container className={styles.menu}>
      <NavVar>
        <NavMenu>
          <li>
            <a href="">국내 전체</a>
          </li>
          <li>
            <a href="">국내 예방 접종 현황</a>
          </li>
          <li>
            <a href="">국내 카운터</a>
          </li>
          <li>
            <a href="">시도별 발생 현황</a>
          </li>
        </NavMenu>
      </NavVar>
      <DropVar>
        <DropDown>
          <li>
            <a href="">menu1</a>
          </li>
          <li>
            <a href="">menu2</a>
          </li>
          <li>
            <a href="">menu3</a>
          </li>
        </DropDown>
        <DropDown>
          <li>
            <a href="">menu1</a>
          </li>
          <li>
            <a href="">menu2</a>
          </li>
          <li>
            <a href="">menu3</a>
          </li>
        </DropDown>
        <DropDown>
          <li>
            <a href="">menu1</a>
          </li>
          <li>
            <a href="">menu2</a>
          </li>
          <li>
            <a href="">menu3</a>
          </li>
        </DropDown>
        <DropDown>
          <li>
            <a href="">menu1</a>
          </li>
          <li>
            <a href="">menu2</a>
          </li>
          <li>
            <a href="">menu3</a>
          </li>
        </DropDown>
      </DropVar>
    </Container>
  );
}

export default NavBar;
