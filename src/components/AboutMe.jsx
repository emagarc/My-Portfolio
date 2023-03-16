import React from "react";
import styled from "styled-components";
import line from "../public/images/line.png";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
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
  text-align: left;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  font-size: 15px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
`;

const AboutMe = ({ onBackClick }) => {
  return (
    <Container>
      <WhatIDo>
        <Line src={line} />
        <SubTitle>Welcome to my web portfolio !</SubTitle>
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
      <Button onClick={onBackClick}>{"<<"}</Button>
    </Container>
  );
};

export default AboutMe;
