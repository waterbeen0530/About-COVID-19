import React from "react";
import styles from "../styles/NavBar.module.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #064772;
`;

const NavMenu = styled.ul`
  width: 1180px;
  display: table;
  table-layout: fixed;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

function NavBar() {
  return (
    <Container className={styles.menu}>
      <NavMenu>
        <li>
          <a href="#">MENU1</a>
          <ul>
            <li>
              <a href="#">SUB_MENU</a>
            </li>
            <li>
              <a href="#">SUB_MENU2</a>
            </li>
            <li>
              <a href="#">SUB_MENU3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">MENU2</a>
          <ul>
            <li>
              <a href="#">SUB_MENU</a>
            </li>
            <li>
              <a href="#">SUB_MENU2</a>
            </li>
            <li>
              <a href="#">SUB_MENU3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">MENU3</a>
          <ul>
            <li>
              <a href="#">SUB_MENU</a>
            </li>
            <li>
              <a href="#">SUB_MENU2</a>
            </li>
            <li>
              <a href="#">SUB_MENU3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">MENU4</a>
          <ul>
            <li>
              <a href="#">SUB_MENU</a>
            </li>
            <li>
              <a href="#">SUB_MENU2</a>
            </li>
            <li>
              <a href="#">SUB_MENU3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">MENU5</a>
          <ul>
            <li>
              <a href="#">SUB_MENU</a>
            </li>
            <li>
              <a href="#">SUB_MENU2</a>
            </li>
            <li>
              <a href="#">SUB_MENU3</a>
            </li>
          </ul>
        </li>
      </NavMenu>
    </Container>
  );
}

export default NavBar;
