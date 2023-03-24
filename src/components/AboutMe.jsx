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
  font-size: 1.1rem;
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
  gap: 20px;
  margin-top: 20px;
  background-color: #2c065d;

  border-radius: 15px;
  box-shadow: 0px 0px 5px #2c065d;
  z-index: 9999;
  padding: 20px;
`;

const Icon = styled.img`
  margin-right: 5px;
  user-select: none;
  width: 180px;
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
          Hello everyone! My name is Emanuel, and I am a Fullstack web
          developer. I consider myself a passionate individual who enjoys
          storytelling and creating unique experiences for my users. Although I
          have a Bachelor's degree in Business Administration, after some work
          experiences and travels that allowed me to meet people from all over
          the world, I found myself immersed in the world of programming. That's
          why, at 29 years old, I made a radical change and completed a
          comprehensive course in Fullstack web development. Since then, I have
          worked on various projects that have allowed me to acquire valuable
          experience. I currently reside in Cordoba, Argentina, and as you can
          see, my native language is Spanish. However, I have been studying
          English since a very young age, and living abroad for some years has
          allowed me to improve the language considerably and have an advanced
          proficiency in it. What I enjoy most about my work is learning new
          technologies, tackling new challenges, and working in teams to create
          innovative and effective solutions. In my web portfolio, you will find
          some of my best works and projects I have participated in. I hope you
          enjoy what you see, and we can collaborate on future projects. Thank
          you very much for your attention, and please do not hesitate to
          contact me if you have any questions or simply want to chat about
          technology!
        </Desc>
        <Icon src={logoEG} />
      </ContainerDesc>
    </Container>
  );
};

export default AboutMe;
