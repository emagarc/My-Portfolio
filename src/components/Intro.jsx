import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import line from "../public/images/line.png";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const Title = styled.h1`
  font-size: 74px;
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
  font-size: 24px;
  color: whitesmoke;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
`;

const Intro = ({ onClick }) => {
  return (
    <Container>
      <Title>
        Full Stack <br /> Web Developer
      </Title>
      <WhatIDo>
        <Line src={line} />
        <SubTitle>What I Do</SubTitle>
      </WhatIDo>
      <Desc>
        I enjoy creating deligthful, human-centered digital experiences.
      </Desc>
      <Button onClick={onClick}>About Me</Button>
    </Container>
  );
};

export default Intro;
