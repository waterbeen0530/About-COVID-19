import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #173e62;
  color: #fff;
  a {
    text-decoration: none;
  }
`;

const Speaker = styled.span`
  position: absolute;
  width: 18px;
  height: auto;
  margin: 20px 0 0 10px;
  padding: 18px 0 0 0;
  background: url("https://ncv.kdca.go.kr/kor/img/footer/fr_ico_notice.png")
    no-repeat;
`;

const Wrapper = styled.div`
  margin: 0 160px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.div`
  div {
    p {
      margin: 0 0;
      padding: 20px 0 0 35px;
      font-size: 15px;
    }
  }
  #infop {
    margin: 0 0;
    padding: 0 0 0 10px;
    font-size: 14px;
    color: #666;
  }
`;

const Sources = styled.div`
  width: 100%;
  padding: 10px 0 60px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    width: 35px;
    height: 30px;
    padding-right: 10px;
  }
  a {
    color: #fff;
  }
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Info>
          <div>
            <Speaker></Speaker>
            <p>상담안내 : 보건소, 질병관리청 콜센터 1339, 지역번호 + 120</p>
          </div>

          <a href="https://ncv.kdca.go.kr/ncov/" target="_blank" id="infop">
            참고 자료 링크 : https://ncv.kdca.go.kr/ncov/
          </a>
        </Info>

        <Sources>
          <a
            href="https://www.facebook.com/profile.php?id=100064560693847"
            target="_blank"
          >
            <span>
              <BsFacebook />
            </span>
          </a>
          <a href="https://github.com/waterbeen0530" target="_blank">
            <span>
              <BsGithub />
            </span>
          </a>
          <a href="https://www.instagram.com/subin_253/" target="_blank">
            <span>
              <BsInstagram />
            </span>
          </a>
        </Sources>
      </Wrapper>
    </Container>
  );
}
export default Footer;
