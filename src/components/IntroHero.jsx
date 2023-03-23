import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import line from "../public/images/Wallpapers/line.png";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  z-index: 9999;
`;

const Title = styled.h1`
  font-size: 74px;
  color: #f2f2f2;
`;

const WhatIDo = styled.div`
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
  font-size: 1.4rem;
  color: #f2f2f2;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
`;

const DescContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
  background-color: #2c065d;

  border-radius: 15px;
  box-shadow: 0px 0px 5px #2c065d;
  z-index: 9999;
  padding: 20px;
`;

const Button = styled.button`
  box-shadow: inset 0px 0px 0px 2.5px rgba(0, 0, 0, 0.4);
  background-color: #da4ea2;
  color: #f2f2f2;
  font-weight: 500;
  height: 35px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;

  &:active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const IntroHero = ({ onClick }) => {
  return (
    <Container>
      <Title>
        Full Stack <br /> Web Developer
      </Title>
      <WhatIDo>
        <Line src={line} />
        <SubTitle>What I Do</SubTitle>
      </WhatIDo>
      <DescContainer>
        <Desc>
          I enjoy creating deligthful, human-centered digital experiences.
          <br />
          To access all the sections of the portfolio, simply scroll down the
          page or use the space bar and arrows to navigate. Once you reach a
          section, click on the corresponding button to view its content.
          <br />
          Please start by clicking the button below and learn more about me.
        </Desc>
      </DescContainer>
      <Button onClick={onClick}>About Me</Button>
    </Container>
  );
};

export default IntroHero;
