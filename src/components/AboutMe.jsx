import React from "react";
import styled from "styled-components";
import line from "../public/images/Wallpapers/line.png";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Welcome = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
  font-size: 25px;
`;

const Desc = styled.p`
  font-weight: 375;
  font-size: 23px;
  color: #fdfdfd;
  text-align: justify;
`;

const Button = styled.button`
  margin-top: 2px;
  box-shadow: inset 0px 0px 0px 2.5px rgba(0, 0, 0, 0.4);
  position: relative;
  background-color: #da4ea2;
  color: #f2f2f2;
  font-weight: 500;
  font-size: 10px;
  width: 35px;
  height: 25px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;

  &::before {
    content: "<<";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
  }

  &:active {
    top: 2px;
  }
`;

const AboutMe = ({ onBackClick }) => {
  return (
    <Container>
      <WhatIDo>
        <Welcome>
          <Line src={line} />
          <SubTitle>Welcome to my web portfolio !</SubTitle>
        </Welcome>
        <Button onClick={onBackClick}>{""}</Button>
      </WhatIDo>
      <Desc>
        My name is Emanuel Garcia, and I am a fullstack web developer and
        licensed administrator based in Cordoba, Argentina. I am 29 years old
        and my passion for technology led me to complete a comprehensive course
        in fullstack web development to expand my skills and knowledge in this
        area. Throughout my professional career, I have worked on various
        projects, allowing me to gain extensive experience in the field of web
        development. I enjoy tackling new challenges and working in teams to
        achieve successful outcomes. In this web portfolio, you will find a
        selection of my best works and projects I have worked on. I hope you
        enjoy what you see and that we can collaborate on future projects. Thank
        you for visiting my site, and please do not hesitate to contact me if
        you have any questions or interest in working with me.
      </Desc>
    </Container>
  );
};

export default AboutMe;
