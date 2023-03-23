import React from "react";
import styled from "styled-components";
import line from "../public/images/Wallpapers/line.png";
import logoEG from "../public/images/Nav/logoEG.png";

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
  font-size: 1.2rem;
  text-align: justify;
  color: #f2f2f2;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
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

const ContainerDesc = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
  background-color: #2c065d;

  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  z-index: 9999;
  padding: 20px;
`;

const Icon = styled.img`
  margin-right: 5px;
  user-select: none;
  width: 140px;
  align-self: flex-end;
  pointer-events: none;
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
      <ContainerDesc>
        <Desc>
          My name is Emanuel, and I am a fullstack web developer. Additionally,
          I hold a Bachelor's degree in Business Administration. I currently
          reside in Cordoba, Argentina, and at 29 years old, my passion for
          technology led me to complete a comprehensive course in fullstack web
          development to expand my skills and knowledge in this area. Since
          then, I have worked on various projects, allowing me to gain
          experience in the field of web development. I enjoy tackling new
          challenges and working in teams to achieve successful outcomes. In
          this web portfolio, you will find a selection of my best works and
          projects I have worked on. I hope you enjoy what you see and that we
          can collaborate on future projects. Thank you for visiting my site,
          and please do not hesitate to contact me if you have any questions or
          are interested in working with me.
        </Desc>
        <Icon src={logoEG} />
      </ContainerDesc>
    </Container>
  );
};

export default AboutMe;
