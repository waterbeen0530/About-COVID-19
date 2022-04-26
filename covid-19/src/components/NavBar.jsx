import React from "react";
import styles from "../styles/NavBar.module.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const NavVar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.ul`
  width: 1180px;
  margin: 0;
  padding: 21px 0 16px 0;
  display: table;
  table-layout: fixed;
  li {
    display: table-cell;
    list-style: none;
    text-align: center;
  }
  a {
    color: #fff;
  }
`;

const DropVar = styled.div`
  width: 1180px;
  //margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: table;
  table-layout: fixed;
`;

const DropDown = styled.ul`
  margin: 0 auto;
  padding: 0 0;
  display: table-cell;

  li {
    padding-bottom: 10px;
    list-style: none;
    text-align: center;
    font-size: 14px;
  }

  a {
    color: #000;
  }
`;

const NavWrapper = styled.div`
  width: 100%;
  background: #064772;
  &:hover {
    DropWrapper ul li {
      display: block;
    }
  }
`;

const DropWrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  display: none;
  justify-content: center;
  align-items: center;
  background: #e1e2e3;
`;

function NavBar() {
  return (
    <Container className={styles.menu}>
      <NavWrapper>
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
      </NavWrapper>
      <DropWrapper>
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
      </DropWrapper>
    </Container>
  );
}

export default NavBar;
