import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&family=Signika:wght@300&display=swap");
  position: sticky;
  top: 0;
  width: 100vw;
  &:hover {
    height: 100%;
    box-shadow: 0px 350px 0 rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.7);
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-family: "Signika", sans-serif;
  }
`;

const NavWrapper = styled.div`
  z-index: 1000;
  background-color: #064772;
  width: 100vw;
  ul {
    position: relative;
    width: 1180px;
    margin: 0 auto;
    padding: 0 0;
    display: table;
    table-layout: fixed;
    text-align: center;
  }
  li {
    position: relative;
    padding: 21px 0 16px;
    display: table-cell;
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
      background: #0d5f95;
      z-index: -1;
      transition: width 150ms ease-in-out;
    }
    &:hover {
      color: #fff;
      &:after {
        width: 100%;
      }
    }
  }
  a {
    font-size: 16px;
    color: #fff;
  }
`;

const MenuBar = styled.div`
  background-color: #fff;
  width: 100vw;
  padding: 0 0;
  display: none;
`;

const MenuWrapper = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: table;
  table-layout: fixed;
  ul {
    padding: 10px 0 200px;
    display: table-cell;
    text-align: center;
  }
  li {
    padding-bottom: 10px;
  }
  ul:hover {
    background-color: #f8fbff;
  }
  a {
    color: #000;
    font-size: 15px;
  }
  a:hover {
    color: #38528e;
    text-decoration: underline;
  }
`;

function NavBar() {
  const dropMenu = useRef(null);
  const dropBackground1 = useRef(null);
  const dropBackground2 = useRef(null);
  const dropBackground3 = useRef(null);
  const dropBackground4 = useRef(null);

  const dropMouseEnter = () => {
    dropMenu.current.style = "display:block";
  };

  const dropMouseLeave = () => {
    dropMenu.current.style = "display:none";
  };

  const handleMouseEnter = () => {
    dropBackground1.current.style = "background-color:#f8fbff";
  };

  const handleMouseleave = () => {
    dropBackground1.current.style = "background-color: #fff";
  };

  const handleMouseEnter1 = () => {
    dropBackground2.current.style = "background-color:#f8fbff";
  };

  const handleMouseleave1 = () => {
    dropBackground2.current.style = "background-color: #fff";
  };

  const handleMouseEnter2 = () => {
    dropBackground3.current.style = "background-color:#f8fbff";
  };

  const handleMouseleave2 = () => {
    dropBackground3.current.style = "background-color: #fff";
  };

  const handleMouseEnter3 = () => {
    dropBackground4.current.style = "background-color:#f8fbff";
  };

  const handleMouseleave3 = () => {
    dropBackground4.current.style = "background-color: #fff";
  };
  return (
    <Container onMouseEnter={dropMouseEnter} onMouseLeave={dropMouseLeave}>
      <NavWrapper>
        <ul>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>
            <a href="">국내 전체</a>
          </li>
          <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseleave1}>
            <a href="">국내 예방 접종 현황</a>
          </li>
          <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseleave2}>
            <a href="">국내 카운터</a>
          </li>
          <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseleave3}>
            <a href="">시도별 발생 동향</a>
          </li>
        </ul>
      </NavWrapper>
      <MenuBar ref={dropMenu}>
        <MenuWrapper>
          <ul
            ref={dropBackground1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseleave}
          >
            <li>
              <a href="">국내 발생 현황</a>
            </li>
            <li>
              <a href="">menu2</a>
            </li>
            <li>
              <a href="">menu3</a>
            </li>
          </ul>
          <ul
            ref={dropBackground2}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseleave1}
          >
            <li>
              <a href="">menu1</a>
            </li>
            <li>
              <a href="">menu2</a>
            </li>
            <li>
              <a href="">menu3</a>
            </li>
          </ul>
          <ul
            ref={dropBackground3}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseleave2}
          >
            <li>
              <a href="">menu1</a>
            </li>
            <li>
              <a href="">menu2</a>
            </li>
            <li>
              <a href="">menu3</a>
            </li>
          </ul>
          <ul
            ref={dropBackground4}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseleave3}
          >
            <li>
              <a href="">menu1</a>
            </li>
            <li>
              <a href="">menu2</a>
            </li>
            <li>
              <a href="">menu3</a>
            </li>
          </ul>
        </MenuWrapper>
      </MenuBar>
    </Container>
  );
}
export default NavBar;
