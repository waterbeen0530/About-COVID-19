import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  z-index: 100;
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&family=Signika:wght@300&display=swap");
  position: sticky;
  top: 0;
  width: 100vw;

  &:hover {
    height: 100%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 0 0;
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
  p {
    font-size: 16px;
    color: #fff;
  }
`;

const MenuBar = styled.div`
  position: absolute;
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
  p {
    color: #000;
    font-size: 15px;
  }
  p:hover {
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
            <p>국내 전체</p>
          </li>
          <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseleave1}>
            <p>국내 예방 접종 현황</p>
          </li>
          <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseleave2}>
            <p>국내 카운터</p>
          </li>
          <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseleave3}>
            <p>시도별 발생 동향</p>
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
            <Link to="/kor">
              <li>
                <p>국내 발생 현황</p>
              </li>
            </Link>
            <Link to="/area">
              <li>
                <p>지역별 발생 현황</p>
              </li>
            </Link>
            <Link to="/Ctt">
              <li>
                <p>전일 대비 발생 현황</p>
              </li>
            </Link>
          </ul>
          <ul
            ref={dropBackground2}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseleave1}
          >
            <Link to="EVaccine">
              <li>
                <p>국내 예방 접종 현황</p>
              </li>
            </Link>

            <li>
              <p>menu2</p>
            </li>
            <li>
              <p>menu3</p>
            </li>
          </ul>
          <ul
            ref={dropBackground3}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseleave2}
          >
            <li>
              <p>menu1</p>
            </li>
            <li>
              <p>menu2</p>
            </li>
            <li>
              <p>menu3</p>
            </li>
          </ul>
          <ul
            ref={dropBackground4}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseleave3}
          >
            <li>
              <p>menu1</p>
            </li>
            <li>
              <p>menu2</p>
            </li>
            <li>
              <p>menu3</p>
            </li>
          </ul>
        </MenuWrapper>
      </MenuBar>
    </Container>
  );
}
export default NavBar;
