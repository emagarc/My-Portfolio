import React, { useState, useContext } from "react";
import styled from "styled-components";
import line from "../public/images/Wallpapers/line.png";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { useMediaQuery } from "@material-ui/core";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`;

const Left = styled.div`
  flex: 1;
  z-index: 9999;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: flex-end;
    padding-top: 650px;
    height: 1000px;
    margin-bottom: -300px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: left;
    font-size: 44px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 50px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-self: flex-start;
    padding-bottom: 1000px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  background-color: #2c065d;
  border-radius: 15px;
  box-shadow: 0px 0px 5px #2c065d;
  z-index: 9999;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    margin-top: 3px;
    padding: 15px;
    width: 300px;
  }
`;

const Desc = styled.p`
  align-items: justify;
  font-size: 1.4rem;
  color: #f2f2f2;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: #2c065d;
  border-radius: 15px;
  box-shadow: 0px 0px 5px #2c065d;
  z-index: 9999;
  @media only screen and (max-width: 768px) {
    text-align: left;
    font-size: 1rem;
  }
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
  white-space: nowrap;
  @media only screen and (max-width: 768px) {
    font-size: 17px;
    width: 130px;
    height: 40px;
    margin-top: 20px;
    z-index: 100000;
    align-self: flex-start;
    border-radius: 15px;
  }

  &:active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const IntroWorks = ({ setIntro }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [showCube, setShowCube] = useState(true);

  const handleClick = () => {
    setButtonClicked(true);
    setIntro("WorkList");
    setShowCube(false);
  };

  return (
    <Container>
      <Left>
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          {showCube && <Cube isSmallScreen={isSmallScreen} />}
        </Canvas>
      </Left>
      <Right>
        <Title>
          Think outside <br /> the square space
        </Title>
        <WhatWeDo>
          <Line src={line} />
          <SubTitle>Projects</SubTitle>
        </WhatWeDo>
        <DescContainer>
          <Desc>
            By clicking below, you will see a list of my projects. <br />
            Please note that you can visit each project's website by clicking on
            the button below its respective description.
          </Desc>
        </DescContainer>
        {!buttonClicked && <Button onClick={handleClick}>See my works</Button>}
      </Right>
    </Container>
  );
};

export default IntroWorks;
